const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const petsRoutes = require("./routes/pets");

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname + "/public/dist/")));
app.use("/", mainRoutes);
app.use("/pets", petsRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT}, you better catch it!`
  );
});
