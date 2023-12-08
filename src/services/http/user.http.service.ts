import axios, {AxiosResponse} from "axios";

export const signup = (data: {
  email: string;
  password: string;
  passwordConfirm: string;
}): Promise<AxiosResponse<{accessToken: string}>> => {
  return axios.post(`${process.env.REACT_APP_API_URL!}/auth/sign-up`, data);
};

export const signin = (data: {
  email: string;
  password: string;
}): Promise<AxiosResponse<{accessToken: string}>> => {
  return axios.post(`${process.env.REACT_APP_API_URL!}/auth/sign-in`, data);
};
