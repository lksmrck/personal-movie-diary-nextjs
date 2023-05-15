import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  dateAdded: String,
});

//Model
var User = models.user || model("user", userSchema);

export default User;
