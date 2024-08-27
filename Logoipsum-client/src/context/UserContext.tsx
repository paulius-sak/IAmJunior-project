import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

interface UserContextValue {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextValue | null>(null);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = (): UserContextValue => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
