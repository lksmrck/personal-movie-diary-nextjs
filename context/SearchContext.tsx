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
  isLoading: boolean;
  isError: boolean;
  getMovies: (url: string) => void;
}

export const SearchContext = createContext({} as SearchContextInterface);

export const SearchContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getMovies = async (url: string) => {
    setIsLoading(true);

    try {
      fetch(url).then((data: any) => {
        return data.results;
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        isError,
        getMovies,
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
