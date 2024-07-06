const mongoose = require("mongoose");

const mongodbURL =
  "mongodb+srv://muhammadsefat55:3ogZsq2JTmWUGbPA@cluster0.dbn21dt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
  return mongoose.connect(mongodbURL);
}
module.exports = connectDB;
