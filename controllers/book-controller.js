const Book = require('../models/Book');

module.exports = {
  getIndex: function (req, res) {
    Book.find()
      .then(book => {
        return res.render('index', { books: book })
      })
    
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    Book.create(req.body)
      .then(() => res.redirect('/'))
      .catch((err) => console.log(err));
  },
  getEdit: function (req, res) {
    Book.findById(req.params.id)
      .then(books => res.render('edit', { book: books }))
      .catch((err) => console.log(err));
  },
  postEdit: function (req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect('/'))
      .catch((err) => console.log(err));
  },
  getDelete: function (req, res) {
    Book.findById(req.params.id)
      .then((book) => res.render('delete', {book}))
      .catch((err) => console.log(err));
  },
  postDelete: function (req, res) {
    Book.findByIdAndDelete(req.params.id, req.body)
      .then(() => res.redirect('/'))
      .catch((err) => console.log(err));
  }
};