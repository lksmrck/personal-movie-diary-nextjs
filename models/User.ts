import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  dateAdded: String,
});

//Model
var User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
