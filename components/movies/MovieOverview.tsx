import { FC, useState } from "react";
import { Modal as MUI_Modal, Button } from "@mui/material";
import { Movie } from "../../types/types";

interface MovieFromApi extends Movie {
  poster_path: string;
  overview: string;
}

type Props = {
  movie: MovieFromApi;
  isModalOpen: boolean;
  handleModalClose: () => void;
};

const MovieOverview: FC<Props> = ({ movie, isModalOpen, handleModalClose }) => {
  return (
    <MUI_Modal
      open={isModalOpen}
      onClose={handleModalClose}
      className="flex justify-center items-center"
    >
      <div>
        <img src={movie.poster_path} />
        <p>{movie.overview}</p>
        <Button>Add to watched movies</Button>
      </div>
    </MUI_Modal>
  );
};

export default MovieOverview;
