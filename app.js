/* eslint max-classes-per-file: ["error", 3] */

import { DateTime } from './modules/Luxon-module.js';
import contactPage from './modules/Contact-module.js';
import addBookForms from './modules/AddBooks-module.js';

contactPage();
addBookForm();

const nowDate = DateTime.now();
const time = nowDate.toLocaleString(DateTime.DATETIME_MED);
const dateDiv = document.getElementById('clock');
dateDiv.innerHTML = time;

/* Declaration of sections */
const titleDisplay = document.querySelector('.main-title');
const list = document.getElementById('books-container');
const formSection = document.querySelector('.add-form');
const contactSection = document.querySelector('.contact');
const pg1 = document.querySelector('#pg1');
const pg2 = document.querySelector('#pg2');
const pg3 = document.querySelector('#pg3');
let i = 0;

// display main page

const displayMainPage = () => {
  titleDisplay.textContent = 'All awesome books';
  list.classList.toggle('active');
  pg1.classList.toggle('active');
};
displayMainPage();

document.querySelector('#pg1').addEventListener('click', (e) => {
  e.preventDefault();
  titleDisplay.textContent = 'All awesome books';
  list.classList.toggle('active');
  pg1.classList.toggle('active');
  formSection.classList.remove('active');
  pg2.classList.remove('active');
  contactSection.classList.remove('active');
  pg3.classList.remove('active');
});

document.querySelector('#pg2').addEventListener('click', (e) => {
  e.preventDefault();
  titleDisplay.textContent = 'Add a new book';
  formSection.classList.toggle('active');
  pg2.classList.toggle('active');
  list.classList.remove('active');
  pg1.classList.remove('active');
  contactSection.classList.remove('active');
  pg3.classList.remove('active');
});

document.querySelector('#pg3').addEventListener('click', (e) => {
  e.preventDefault();
  titleDisplay.textContent = 'Contact Information';
  contactSection.classList.toggle('active');
  pg3.classList.toggle('active');
  list.classList.remove('active');
  pg1.classList.remove('active');
  formSection.classList.remove('active');
  pg2.classList.remove('active');
});

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(author) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.author === author) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const bookData = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    bookData.className = 'book-delete';
    list.appendChild(bookData);

    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    removeBtn.classList.add('remove-btn');
    bookData.setAttribute('id', `dv${i}`);
    bookTitle.setAttribute('id', `bt${i}`);
    bookAuthor.setAttribute('id', `ba${i}`);
    removeBtn.setAttribute('id', `rb${i}`);

    i += 1;
    const btId = bookTitle.getAttribute('id');
    const baId = bookAuthor.getAttribute('id');
    const rbId = removeBtn.getAttribute('id');

    bookData.appendChild(bookTitle);
    bookData.appendChild(bookAuthor);
    bookData.appendChild(removeBtn);

    document.getElementById(btId).textContent = `"${book.title}"`;
    document.getElementById(baId).textContent = book.author;
    document.getElementById(rbId).textContent = 'Remove';
  }

  static deleteBook(target) {
    target.parentElement.remove();
  }

  static clearFields() {
    document.querySelector('#title-book').value = '';
    document.querySelector('#author-name').value = '';
  }
}

// display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// add a book

const addNewBook = document.querySelector('.add-btn');
addNewBook.addEventListener('click', (e) => {
  e.preventDefault();

  const newTitle = document.querySelector('#title-book').value;
  const newAuthor = document.querySelector('#author-name').value;

  // validate
  if (newTitle === '' || newAuthor === '') {
    alert('please fill in all empty fields');
  } else {
    const book = new Book(newTitle, newAuthor);

    // add book to UI
    UI.addBookToList(book);
    // add book to store
    Store.addBook(book);
    // Clear fields
    UI.clearFields();
  }
});

// remove Books

document.querySelector('#books-container').addEventListener('click', (e) => {
  e.preventDefault();
  // remove book from UI
  UI.deleteBook(e.target);
  // remove from store
  Store.removeBook(e.target.previousElementSibling.textContent);
});
