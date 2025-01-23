export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface ILoginResponse {
  email: string;
  fullname: string;
  id: string;
  roleId: string;
  token: string;
}

export interface IUserState {
  email: string;
  fullname: string;
  id: string;
  roleId: string;
  token: string;
  isAuthenticated: boolean;
}
