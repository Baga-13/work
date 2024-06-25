import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { getUserProfile, login, signup } from "../../api/user/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserProfile(token)
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    const data = await login(email, password);
    localStorage.setItem("token", data.token);
    setUser(data.user);
    router.push("/");
  };
  const handleSignup = async (
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
    const data = await signup(
      role,
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
      logo
    );
    localStorage.setItem("token", data.token);
    setUser(data.user);
    router.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, handleLogin, handleSignup, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
