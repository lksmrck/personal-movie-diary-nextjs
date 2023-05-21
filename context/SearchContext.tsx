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
  getMovies: (searchTerm: string) => any;
}

export const SearchContext = createContext({} as SearchContextInterface);

export const SearchContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [foundMovies, setFoundMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=274808d92789c49e637a022e855f63dd&query=";

  const getMovies = async (searchTerm: string) => {
    setIsLoading(true);

    try {
      /*     if (!process.env.MOVIE_DB_URL) return; */

      fetch(url + searchTerm).then((res: any) => {
        return res.json().then((data: any) => {
          console.log(data.results);
          setFoundMovies(data.results);
          setIsLoading(false);
          setIsError(false);
        });
        /* return res.results; */
      });
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      return;
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
