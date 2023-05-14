import { Schema, model, models } from "mongoose";

const movieSchema = new Schema({
  id: String,
  name: String,
  imageURL: String,
  userId: String,
  dateWatched: String,
  dateAdded: String,
  rating: Number,
});

//Model
let Movie = /* models.Movie || */ model("movie", movieSchema);

export default Movie;
