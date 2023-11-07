import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/button';
import Spacer from '../../components/spacer';
import Input from '../../components/textinput';
// import {RootStackParamList} from '../../utils/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../app/AuthContext';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

// type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const {signIn} = React.useContext(AuthContext);
  const [formLogin, setFormLogin] = useState({username: '', password: ''});
  const navigateToHomeScene = () => {
    storeData();
  };
  const storeData = async () => {
    try {
      const jsonValue = 'something';
      signIn(jsonValue);
      await AsyncStorage.setItem('@user_token', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const onHandleForm = (name: string, value: string) => {
    setFormLogin(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <View>
        <Spacer height={10} />
        <Input
          value={formLogin.username}
          placeholder="username"
          onChangeText={e => onHandleForm('username', e)}
          testID="input_username"
        />
        <Spacer height={10} />
        <Input
          value={formLogin.password}
          placeholder="password"
          onChangeText={e => onHandleForm('password', e)}
          testID="input_password"
        />
      </View>
      <Spacer height={10} />
      <Button
        label="Login"
        onPress={navigateToHomeScene}
        testID="button_login"
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
