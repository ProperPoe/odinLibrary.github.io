const bookContainer = document.querySelector(".book-container");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");


const myLibrary = [
    {
        id: 0,
        title: 'Prometheus Rising',
        author: 'Robert Anton Wilson',
        pages: 200,
        read: 'read'
    },
    {
        id: 1,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: 'not read'
    },
    {
        id: 2,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: 'not read'
    },
    {
        id: 3,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: 'not read'
    },

];

function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // console.log(this)
    // myLibrary.push(this)
    // this.info = function(){
    //     console.log(this);
    //     // myLibrary.push(this)
    // }

    // this.info();
}

// const book1 = new Book(4, 'Illuminati Rising', "Steve", 345, 'not read');

myLibrary.push(new Book(4, 'Illuminati Rising', "Steve", 345, 'not read'))


myLibrary.forEach((books) => {
    console.log(books)
    if(books){
        loadBooks(books)
    }
})


function addBookToLibrary () {

}


// console.log(myLibrary)

function loadBooks (library) {
    // console.log(library)
    let newArea = document.createElement("div");
    let title = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let read = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let readBtn = document.createElement("button");

    title.textContent = library.title;
    author.textContent = library.author;
    pages.textContent = library.pages;
    read.textContent = library.read;
    deleteBtn.textContent = 'Delete';
    readBtn.textContent = 'Read';
    newArea.appendChild(title)
    newArea.appendChild(author)
    newArea.appendChild(pages)
    newArea.appendChild(read)
    newArea.appendChild(readBtn);
    newArea.appendChild(deleteBtn);
    newArea.classList.add("card")
    bookContainer.appendChild(newArea);

    deleteBtn.addEventListener("click", ()=>{})
    readBtn.addEventListener("click", ()=>{})

}



// console.log(book1.info())
// console.log(myLibrary[4].title)
// console.log(book1.info())
// innerTest.innerHTML = book1.info()
// let newArea = document.createElement("h1");
// newArea.textContent = book1.info();
// innerTest.textContent = book1;