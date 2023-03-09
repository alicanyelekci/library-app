/* eslint-disable require-jsdoc */
const main = document.querySelector(".main-content");
const addBtn = document.querySelector(".add");
const submitBtn = document.querySelector(".submit-btn");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor(books = []) {
    this.books = books;
  }

  addBook() {
    const book = new Book(
      document.getElementById("title").value,
      document.getElementById("author").value,
      document.getElementById("pages").value,
      document.getElementById("read").checked
    );

    this.books.push(book);
    this.displayBookInLibrary(book);

    document.forms[0].reset();
    document.getElementById("myForm").style.display = "none";
  }

  displayBookInLibrary(book) {
    const bookCard = document.createElement("div");
    bookCard.className = "book";
    main.appendChild(bookCard);

    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("button");
    const remove = document.createElement("button");

    title.className = "title";
    author.className = "author";
    pages.className = "pages";
    read.className = "read";
    remove.className = "remove";

    title.innerText = `Title: ${book.title}`;
    author.innerText = `Author: ${book.author}`;
    pages.innerText = `Page Count: ${book.pages} pages`;
    remove.innerText = `Remove`;

    if (book.read == true) {
      read.innerText = "Read";
      read.style.backgroundColor = "green";
    } else if (book.read == false) {
      read.innerText = "Not Read";
      read.style.backgroundColor = "red";
    }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(remove);

    this.readBtn = document.querySelectorAll(".read");
    this.removeBtn = document.querySelectorAll(".remove");

    read.onclick = () => {
      if (book.read == true) {
        book.read = false;
        read.innerText = "Not Read";
        read.style.backgroundColor = "red";
      } else {
        book.read = true;
        read.innerText = "Read";
        read.style.backgroundColor = "green";
      }
    };

    remove.onclick = () => {
      this.books.splice(this.books.indexOf(book), 1);
      bookCard.remove();
    };
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

const myLibrary = new Library();

addBtn.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "block";
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !title.validity.valueMissing &&
    !author.validity.valueMissing &&
    !pages.validity.valueMissing
  ) {
    myLibrary.addBook();
  }
});
