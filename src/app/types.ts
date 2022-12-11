export type PropsUser = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null | undefined;
};

export enum EUSER {
  RESTORE_TOKEN,
  SIGN_IN,
  SIGN_OUT,
}

export type PropsAction = {
  type: EUSER;
  token: string | null | undefined;
};

export type PropsAuthContext = {
  signIn(token: string): Promise<void>;
  signOut(): void;
};
