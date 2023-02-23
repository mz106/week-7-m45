const Book = require("./model");

const getAllBooks = async (request, response) => {
  const allBooks = await Book.find({});

  console.log(allBooks);

  const successResponse = {
    message: "response sent successfully",
    books: allBooks,
  };

  response.send(successResponse);
};

const addBook = async (request, response) => {
  const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  console.log("newBook: ", newBook);

  const successResponse = {
    message: "Successfully added to DB",
    newBook: newBook,
  };

  response.send(successResponse);
};

module.exports = {
  getAllBooks,
  addBook,
};
