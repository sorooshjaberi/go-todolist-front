import axiosInstance from "@/lib/axios";
import { LoginPayload, LoginResponse, SignupPayload, SignupResponse } from "@/models/auth";
import { ResponseModel } from "@/models/axios";

export const login = (loginPayload: LoginPayload) => {
  return axiosInstance.post<ResponseModel<LoginResponse>>("auth/login", loginPayload);
};

export const signup = (signupPayload: SignupPayload) => {
  return axiosInstance.post<ResponseModel<SignupResponse>>("auth/signup", signupPayload);
};
