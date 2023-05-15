import { Schema, model, models } from "mongoose";

import Movie from "./Movie";

/* const movie = new Schema({
  id: String,
  name: String,
  imageURL: String,
  dateWatched: String,
  dateAdded: String,
  rating: Number,
}); */

const userMoviesSchema = new Schema({
  id: { type: Schema.Types.ObjectId, ref: "User" },
  email: { type: Schema.Types.ObjectId, ref: "User" },
  movies: [Movie],
});

//Model
var UserMovies = models.userMovies || model("userMovies", userMoviesSchema);

export default UserMovies;
