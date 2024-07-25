const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: { type: String, required: true }, age: { type: Number, required: true }
})
const PictureSchema = new Schema({
  name: { type: String, required: true },
  src: { type: String, required: true },
});

module.exports = mongoose.model("Picture", PictureSchema);
module.exports = mongoose.model("User", UserSchema)