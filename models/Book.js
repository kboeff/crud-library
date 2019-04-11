const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  // TODO:
  title: {
      type: 'string',
      require: 'true'
  },
  author: {
      type: 'string',
      require: 'true'
  },
  price: {
      type: 'number', 
      min: 1
  }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;