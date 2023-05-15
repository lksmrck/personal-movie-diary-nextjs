import { useState } from "react";
import { Input, Button } from "@mui/material";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(null);

  const handleTestSubmit = async () => {
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
      <Input placeholder="Search for movie..." />
      <Button onClick={handleTestSubmit}>Test BTN</Button>
    </div>
  );
};

export default Search;
