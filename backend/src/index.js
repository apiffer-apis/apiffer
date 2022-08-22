//modules
require("dotenv").config({ path: "src/config/.env" });
const { apifferRouter } = require("./api/v1/routes");
const express = require("express");
var cors = require("cors");


//variables
const port = process.env.PORT;

//app initializaton
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//routes
app.get("/", (req, res) => {
  res.send("Welcome to the Apiffer API ❤️");
});


//route middlewares
app.use("/", apifferRouter);

//error handling
app.use("*", (req, res) => {
  return res.status(404).send("API Endpoint doesn't exists");
});


app.listen(port, () => {
    console.log(
      `Server UP and Running 🚀 \nListening on port http://127.0.0.1:${port} 🔌`
    );
});
