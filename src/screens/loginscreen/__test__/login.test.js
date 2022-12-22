import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('Login Screen', () => {
  it('should go to login', () => {
    const screen = render(<LoginScreen />);
    const loginButton = screen.getByTestId('button_login');
    const inputUserName = screen.getByTestId('input_username');
    const inputPassword = screen.getByTestId('input_password');
    fireEvent.press(loginButton);
    fireEvent.changeText(inputUserName, 'aditya_user');
    fireEvent.changeText(inputPassword, '12345');
    expect(inputUserName.props.value).toEqual('aditya_user');
    expect(inputPassword.props.value).toEqual('12345');
    // expect(AsyncStorage.setItem).toBeCalledWith('@user_token', 'something');
  });
});
