import { useState } from "react";

const useSearch = () => {
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

  return { getMovies, isLoading, isError };
};

export default useSearch;
