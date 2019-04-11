const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  // TODO:
  title: {
      type: String,
      required: true
  },
  author: {
      type: String,
      required: true
  },
  price: {
      type: Number, 
      min: 1
  }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;