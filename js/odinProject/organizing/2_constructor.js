
// object constructor: when making new objects (a lot of them!), 
// this is a way you can make a lot of them!
function Player(name, marker) {
    if (!new.target) {
        throw Error("Use the *new* before calling the object man.")
    };

    this.name = name;
    this.marker = marker;

    this.sayName = function() {
        console.log(this.name)
    };
}

//here is how to make an object using the *new* (remember to actually use new and not just Player you python bum)
const player = new Player("steve", "x");
// player.sayName()

// Exercise 1 - Book object

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("Use the *new* before calling the object man.")
    };


    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        console.log(this.title + " by " + this.author + ", " + this.pages + " pages, READ? " + this.read);
        // return title, author, pages, read; (we will use this form later)
    }
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, "no")
// theHobbit.info()
