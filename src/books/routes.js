const { Router } = require("express");
const bookRouter = Router();

const { getAllBooks, addBook } = require("./controllers");

bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.post("/books/addbook", addBook);

module.exports = bookRouter;
