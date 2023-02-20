//import express from "../node_modules/....."
const express = require("express");

const app = express();

app.use("/", express.static("blank"));
app.use("/books", express.static("books"));

app.listen(5001, () => console.log("Server is listening on port 5001"));
