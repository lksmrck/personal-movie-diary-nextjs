import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  FC,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface SearchContextInterface {
  testValue: /* User | null; */ any;
  setTestValue: /* Dispatch<SetStateAction<User | null>>; */ any;
}

export const AuthContext = createContext({} as SearchContextInterface);

export const AuthContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [testValue, setTestValue] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        testValue,
        setTestValue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
