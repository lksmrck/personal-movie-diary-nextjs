import { useState, useEffect, ChangeEvent } from "react";
import { Input, Button } from "@mui/material";

import useSearch from "../../context/SearchContext";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const { getMovies } = useSearch();

  useEffect(() => {
    console.log("jedu");
    const API_CALL = setTimeout(() => {
      if (searchTerm) {
        getMovies(searchTerm);
      }
    }, 500);
    return () => clearTimeout(API_CALL);
  }, [searchTerm]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  //TEST SUBMIT FNC
  const handleTestSubmit = async () => {
    // Poslat v body i session.user.email
    try {
      console.log("submitted");
      const response = await fetch("/api/movie/new", {
        method: "POST",
        /*  body: JSON.stringify({
          text: "testBody",
        }), */
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Input placeholder="Search for movie..." onChange={onChangeHandler} />
      <Button onClick={handleTestSubmit}>Test BTN</Button>
    </div>
  );
};

export default Search;
