let userLibrary = [];
const booksTable = document.getElementById("books-table");
const addBookForm = document.getElementById("add-book-form");

addBookForm.addEventListener(
  "submit",
  (e) => {
    addToLibrary(
      document.getElementById("book-title").value,
      document.getElementById("book-author").value,
      document.getElementById("book-pages").value,
      document.getElementById("book-status-read").checked ? true : false
    );
    addBookRow(userLibrary[userLibrary.length - 1]);
    addBookForm.reset();
    e.preventDefault();
  },
  false
);

function Book(title, author, numberOfPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;
}

addToLibrary = (title, author, numberOfPages, haveRead) => {
  const newBook = new Book(title, author, numberOfPages, haveRead);
  userLibrary.push(newBook);
};

showBooks = () => {
  for (let rowItr = 0; rowItr < userLibrary.length; rowItr++) {
    let row = booksTable.insertRow(rowItr + 1);
    row.insertCell(0).innerHTML = userLibrary[rowItr].title;
    row.insertCell(1).innerHTML = userLibrary[rowItr].author;
    row.insertCell(2).innerHTML = userLibrary[rowItr].numberOfPages;
    row.insertCell(3).innerHTML = userLibrary[rowItr].haveRead
      ? "Read"
      : "Not Read";
  }
};

addBookRow = ({ title, author, numberOfPages, haveRead }) => {
  let row = booksTable.insertRow(userLibrary.length);
  row.insertCell(0).innerHTML = title;
  row.insertCell(1).innerHTML = author;
  row.insertCell(2).innerHTML = numberOfPages;
  row.insertCell(3).innerHTML = haveRead ? "Read" : "Not Read";
};

addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
// addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
// addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
// addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
// addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
// addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
// addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", false);

// console.log(userLibrary[0]);
showBooks(userLibrary);
