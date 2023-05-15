import mongoose, { Schema, model, models } from "mongoose";
import { movieSchema } from "./Movie";

/* import Movie from "./Movie"; */

/* const movie = new Schema({
  id: String,
  name: String,
  imageURL: String,
  dateWatched: String,
  dateAdded: String,
  rating: Number,
}); */

const userDataSchema = new Schema({
  /*   id: { type: Schema.Types.ObjectId, ref: "User" }, */
  /*  email: { type: Schema.Types.ObjectId, ref: "User" }, */
  email: String,
  /*   movies: [movieSchema], */
  movies: [
    {
      id: String,
      name: String,
      imageURL: String,
      dateWatched: String,
      dateAdded: String,
      rating: Number,
    },
  ],
});

//Model
var UserData =
  mongoose.models.userData || mongoose.model("userData", userDataSchema);

export default UserData;
