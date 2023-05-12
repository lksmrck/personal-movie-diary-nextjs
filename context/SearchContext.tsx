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

export const SearchContext = createContext({} as SearchContextInterface);

export const SearchContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [testValue, setTestValue] = useState(true);

  return (
    <SearchContext.Provider
      value={{
        testValue,
        setTestValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
const useSearch = () => {
  return useContext(SearchContext);
};

export default useSearch;
