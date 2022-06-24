let userLibrary = [];
let rowCounter = 0;
const booksTable = document
  .getElementById("books-table")
  .querySelector("tbody");
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
    addBookForm.reset();
    e.preventDefault();
  },
  false
);

class Book {
  constructor(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
  }
}

addToLibrary = (title, author, numberOfPages, haveRead) => {
  const newBook = new Book(title, author, numberOfPages, haveRead);
  userLibrary.push(newBook);
  addBookRow(newBook);
};

// showBooks = () => {
//   for (let rowItr = 0; rowItr < userLibrary.length; rowItr++) {
//     let row = booksTable.insertRow(rowItr + 1);
//     row.insertCell(0).innerHTML = userLibrary[rowItr].title;
//     row.insertCell(1).innerHTML = userLibrary[rowItr].author;
//     row.insertCell(2).innerHTML = userLibrary[rowItr].numberOfPages;
//     row.insertCell(3).innerHTML = userLibrary[rowItr].haveRead
//       ? "Read"
//       : "Not Read";
//   }
// };

addBookRow = ({ title, author, numberOfPages, haveRead }) => {
  let rowNum = rowCounter;
  const deleteBookButton = document.createElement("button");
  deleteBookButton.innerText = "Delete";
  deleteBookButton.classList.add("btn");
  deleteBookButton.classList.add("btn-warning");
  deleteBookButton.addEventListener("click", () => {
    userLibrary[rowNum] = null;
    document.querySelector(`[data-row-num="${rowNum}"]`).remove();
  });

  const bookStatusToggle = document.createElement("button");
  bookStatusToggle.innerText = haveRead ? "Read" : "Pending";
  bookStatusToggle.classList.add("btn");
  bookStatusToggle.classList.add("btn-secondary");
  bookStatusToggle.addEventListener("click", () => {
    userLibrary[rowNum].haveRead = !userLibrary[rowNum].haveRead;
    bookStatusToggle.innerText = userLibrary[rowNum].haveRead
      ? "Read"
      : "Pending";
  });

  let row = booksTable.insertRow();
  row.insertCell(0).innerHTML = title;
  row.insertCell(1).innerHTML = author;
  row.insertCell(2).innerHTML = numberOfPages;
  row.insertCell(3).appendChild(bookStatusToggle);
  row.insertCell(4).appendChild(deleteBookButton);
  row.dataset.rowNum = rowNum;
  rowCounter++;
};

addToLibrary("The Hobbit", "J.R.R. Tolkien", "295", false);
