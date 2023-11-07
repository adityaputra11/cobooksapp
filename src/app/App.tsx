// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import DetailBookScreen from '../screens/detailbookscreen';
import HomeScreen from '../screens/homescreen';
import {RootStackParamList, TabRootStackParamList} from '../utils/navigation';
import {EUSER, PropsAction, PropsUser} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './AuthContext';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../utils/constant';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profilescreen';
import LoginScreen from '../screens/loginscreen';

const Tab = createBottomTabNavigator<TabRootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();

const initialState = {isLoading: true, userToken: null};

function App() {
  const reducerUser = (state: PropsUser, action: PropsAction) => {
    switch (action.type) {
      case EUSER.SIGN_IN:
        return {
          ...state,
          userToken: action.token,
          isLoading: false,
        };
      case EUSER.SIGN_OUT:
        return {
          ...state,
          userToken: null,
          isLoading: false,
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
        console.log('error', e);
      }

      dispatch({type: EUSER.SIGN_IN, token: userToken});
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

  if (state.isLoading) {
    return (
      <View style={styles.splashContainer}>
        <Text>Loading ...</Text>
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeTab" component={HomeTabs} />
        <Stack.Screen name="DetailBook" component={DetailBookScreen} />
        {/* !!TODO FOR IMPLEMETN AUTH */}
        {/* {state.userToken == null ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="HomeTab" component={HomeTabs} />
            <Stack.Screen name="DetailBook" component={DetailBookScreen} />
          </>
        )} */}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: color.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
