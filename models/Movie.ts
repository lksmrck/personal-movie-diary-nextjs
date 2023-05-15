import mongoose, { Schema, model, models } from "mongoose";

export const movieSchema = new Schema({
  id: String,
  name: String,
  imageURL: String,
  dateWatched: String,
  dateAdded: String,
  rating: Number,
});

//Model
/* var Movie = mongoose.models.movies || mongoose.model("movie", movieSchema);

export default Movie;
 */
