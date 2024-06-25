import { fetcher } from "@/utils/fetcher";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const login = async (email: string, password: string) => {
  //   const response = await api.post("./auth/signin", { email, password });
  //   return response.data;
  return fetcher(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const signup = async (
  role: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  resume: string,
  name: string,
  size: number,
  phone: string,
  website: string,
  service: string,
  logo: string
) => {
//   return response.data;
return fetcher(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role,
        email,
        password,
        firstName,
        lastName,
        resume,
        name,
        size,
        phone,
        website,
        service,
        logo,}),
  });
};
