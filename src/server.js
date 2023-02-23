require("dotenv").config();
require("./db/connection");
//import express from "../node_modules/....."
const express = require("express");

const Book = require("./books/model");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

app.use(bookRouter);
app.use(authorRouter);
app.use(userRouter);

// {
//   "title": "matilda",
//   "author": "roald dahl",
//   "genre": "childrens"
// }

// app.post("/books/addbook", async (request, response) => {
//   const newBook = await Book.create({
//     title: request.body.title,
//     author: request.body.author,
//     genre: request.body.genre,
//   });

//   console.log("newBook: ", newBook);

//   const successResponse = {
//     message: "Successfully added to DB",
//     newBook: newBook,
//   };

//   response.send(successResponse);
// });

app.listen(5001, () => console.log("Server is listening on port 5001"));
