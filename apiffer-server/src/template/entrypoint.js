const express = require("express");
var cors = require("cors");

const port = PORT;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/PATH", (req, res) => {res.send(DATA);});


app.listen(port)
  