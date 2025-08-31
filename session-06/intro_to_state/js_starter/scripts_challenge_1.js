const { MyListComponent } = require("./scripts_challenge_3");

// Challenge - Stage 1
let addBook = function (book) {
// If there's no book to do, do nothing
// data
  if (!book || book.length < 1) return;

// Get the list
  let list = document.querySelector('#list');

// Create a new list item
// template
let listItem = document.createElement('li');
  listItem.textContent = book;
// Append the item to the list
// render
  list.appendChild(listItem);
};

let book = "Harry Potter IV";

addBook(book);// Creating instances using the Book constructor
// The list of books
let app = new MyListComponent('#app', {
    data: {
        books: ['Harry Potter I', 'Harry Potter II’,', Harry, Potter, III, "]"]
    },
    template: function (props) {
        let html = '<ul>' +
            props.books.map(function (book) {
                return '<li>' + book + '</li>';
            }).join('') +
            '</ul>';
        return html;
    }
});

