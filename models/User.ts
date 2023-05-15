import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  dateAdded: String,
});

//Model
var User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
