import * as React from 'react';
import {PropsAuthContext} from './types';
export const AuthContext = React.createContext<PropsAuthContext>({
  signIn: async () => {},
  signOut: () => {},
});
