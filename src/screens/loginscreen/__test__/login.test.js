import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('Login Screen', () => {
  it('should go to login', () => {
    const screen = render(<LoginScreen />);
    const loginButton = screen.getByTestId('button_login');
    fireEvent.press(loginButton);
    expect(AsyncStorage.setItem).toBeCalledWith('@user_token', 'something');
  });
});
