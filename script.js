const bookContainer = document.querySelector(".book-container");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const showFormBtn = document.getElementById("showForm");
const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const bookRead = document.getElementById("read");

let showTheForm = false;



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
}
form.style.display = "none"

showFormBtn.addEventListener("click", () => {
    if(showTheForm === false){
        showTheForm = true;
    }else{
        showTheForm = false;
    }

    if(!showTheForm){
        form.style.display = "none";
    }else{
        form.style.display = "flex";
    }
})
// myLibrary.push(new Book(4, "Boy o boy", "Steve", 345, "Not read"))
form.addEventListener("submit", addBookToLibrary)

function addBookToLibrary (e) {
    e.preventDefault();
    let titleVal = title.value;
    let authorVal = author.value;
    let pagesVal = pages.value;
    let readVal = bookRead.value;
    
    myLibrary.push(new Book(4, titleVal, authorVal, pagesVal, readVal))
    console.log(myLibrary)

    title.value = '';
    author.value = '';
    pages.value = '';
    bookRead.value = '';


    bookContainer.textContent = ""
    myLibrary.forEach((books) => {
        loadBooks(books);
    });
}


if(myLibrary.length > 0){

    myLibrary.forEach((books) => {
        loadBooks(books)
    })
}



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


