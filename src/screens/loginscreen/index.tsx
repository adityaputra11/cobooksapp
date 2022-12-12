import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/button';
import Spacer from '../../components/spacer';
import Input from '../../components/textinput';
// import {RootStackParamList} from '../../utils/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../app/AuthContext';
import styles from './styles';

// type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const {signIn} = React.useContext(AuthContext);
  const navigateToHomeScene = () => {
    storeData();
  };
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify('masuk woi');
      signIn(jsonValue);
      await AsyncStorage.setItem('@user_token', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <View>
        <Spacer height={10} />
        <Input
          placeholder="username"
          onChangeText={() => {}}
          testID="input_username"
        />
        <Spacer height={10} />
        <Input
          placeholder="password"
          onChangeText={() => {}}
          testID="input_password"
        />
      </View>
      <Spacer height={10} />
      <Button
        label="Login"
        onPress={navigateToHomeScene}
        testID="button_login"
      />
    </View>
  );
};

export default LoginScreen;
