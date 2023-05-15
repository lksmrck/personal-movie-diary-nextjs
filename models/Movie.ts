import { Schema, model, models } from "mongoose";

const movieSchema = new Schema({
  id: String,
  name: String,
  imageURL: String,
  dateWatched: String,
  dateAdded: String,
  rating: Number,
});

//Model
var Movie = models.movies || model("movie", movieSchema);

export default Movie;
