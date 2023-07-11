const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://gupta:gupta@instadb.8wnebub.mongodb.net/"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
  })
  .catch((err) => console.log(err));

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
