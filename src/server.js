//import express from "../node_modules/....."
const express = require("express");

const app = express();

app.use(express.json());

app.get("/book", (request, response) => {
  //   console.log(request);
  //   response.send("Hello from the book route!");
  const book = {
    title: "lord of the rings",
    author: "tolkein",
    genre: "fantasy",
  };

  const successResponse = {
    message: "response sent successfully",
    book: book,
  };

  response.send(successResponse);
});

// {
//   "title": "matilda",
//   "author": "roald dahl",
//   "genre": "childrens"
// }

app.post("/book", (request, response) => {
  //   console.log(request.body);
  //   response.send("Hello from the post route!");

  const newBook = {
    id: Math.floor(Math.random() * 50),
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  };

  const successResponse = {
    message: "Successfully added to DB",
    newBook: newBook,
  };

  response.send(successResponse);
});

app.listen(5001, () => console.log("Server is listening on port 5001"));
