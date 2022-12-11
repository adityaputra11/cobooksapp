// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import DetailBookScreen from '../screens/detailbookscreen';
import HomeScreen from '../screens/homescreen';
import LoginScreen from '../screens/loginscreen';
import {RootStackParamList} from '../utils/navigation';
import {EUSER, PropsAction, PropsUser} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './AuthContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

const initialState = {isLoading: true, isSignout: true, userToken: null};

function App() {
  const reducerUser = (state: PropsUser, action: PropsAction) => {
    switch (action.type) {
      case EUSER.RESTORE_TOKEN:
        return {
          ...state,
          userToken: action.token,
          isLoading: false,
        };
      case EUSER.SIGN_IN:
        return {
          ...state,
          isSignout: false,
          userToken: action.token,
        };
      case EUSER.SIGN_OUT:
        return {
          ...state,
          isSignout: true,
          userToken: null,
        };
    }
  };
  const [state, dispatch] = React.useReducer(reducerUser, initialState);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('@user_token');
      } catch (e) {
        // Restoring token failed
      }
      console.log('user_token', userToken);

      dispatch({type: EUSER.RESTORE_TOKEN, token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (token: string) => {
        dispatch({type: EUSER.SIGN_IN, token: token});
      },
      signOut: () => dispatch({type: EUSER.SIGN_OUT, token: null}),
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {state.isSignout ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DetailBook" component={DetailBookScreen} />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

export default App;
