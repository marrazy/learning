const myLibrary = [];

function Book(name, author, pages) {
    //constructor
    if (!new.target) {
        throw Error("Use the *new* before calling the object man.");
    };

    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBook(name, author, pages) {
    const book = new Book(name, author, pages);
    myLibrary.push(book)
}