import { useState } from "react";
import { Input } from "@mui/material";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  return (
    <div>
      <Input placeholder="Search for movie..." />
    </div>
  );
};

export default Search;
