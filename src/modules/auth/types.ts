export interface IAuthState {
  userToken: string;
  errors?: string | null;
}

export interface ILoginInput {
  login: string;
  password: string;
}