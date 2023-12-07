import axios from "axios";

export const signup = (data: {
  email: string;
  password: string;
  passwordConfirm: string;
}) => {
  return axios.post(`${process.env.REACT_APP_API_URL!}/auth/sign-up`, data);
};
