export type PropsUser = {
  isLoading: boolean;
  userToken: string | null | undefined;
};

export enum EUSER {
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
