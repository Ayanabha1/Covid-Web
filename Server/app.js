const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const DataRoute = require("./Routes/dataRoute");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Yay! Database is connected");
});

app.get("/", (req, res) => {
  // const data = await getData();
  res.send("YO");
});

app.use("/data", DataRoute);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
