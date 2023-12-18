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
let bookStatus = false;

let myLibrary = [];
let booksLs = JSON.parse(localStorage.getItem('bookItem'))

if (booksLs) {
    myLibrary = booksLs;  // Assign the loaded books to myLibrary
    myLibrary.forEach((books) => {
        loadBooks(books);
    });
}

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
form.addEventListener("submit", addBookToLibrary);

function addBookToLibrary (e) {
    e.preventDefault();
    let readStatus = "";
    let titleVal = title.value;
    let authorVal = author.value;
    let pagesVal = pages.value;
    if(bookRead.checked){
        readStatus = 'true'
    }else{
        readStatus = 'false'
    }
    let readVal = bookRead.value;
    
    let newId = Math.max(...myLibrary.map(book => book.id), 0) + 1;

    myLibrary.push(new Book(newId, titleVal, authorVal, pagesVal, readStatus));
    localStorage.setItem('bookItem', JSON.stringify(myLibrary))
    console.log(myLibrary)

    title.value = '';
    author.value = '';
    pages.value = '';
    bookRead.checked = false;



    clearBookContainer();
    myLibrary.forEach((books) => {
        loadBooks(books)
    })
}





function loadBooks (library) {
    // console.log(bookRead.checked)
    console.log(library)
    let newArea = document.createElement("div");
    let bookTitle = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let read = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let readBtn = document.createElement("button");

    bookTitle.textContent = library.title;
    author.textContent = library.author;
    pages.textContent = library.pages;
    if(library.read === 'true'){

        read.textContent = 'Read';
    }else{
        read.textContent = 'Not Read';

    }
    deleteBtn.textContent = 'Delete';
    readBtn.textContent = 'Read';
    newArea.appendChild(bookTitle)
    newArea.appendChild(author)
    newArea.appendChild(pages)
    newArea.appendChild(read)
    newArea.appendChild(readBtn);
    newArea.appendChild(deleteBtn);
    newArea.classList.add("card")
    bookContainer.appendChild(newArea);

    deleteBtn.addEventListener("click", ()=> {
        console.log(library)
        const bookIdToDelete = library.id;

        let filtered = myLibrary.filter(book => book.id !== bookIdToDelete)


        localStorage.setItem('bookItem', JSON.stringify(filtered));


        newArea.remove();

        myLibrary = filtered;
    })
    readBtn.addEventListener("click", ()=>{
        const bookIdToUpdate = library.id;

        let updatedLibrary = myLibrary.map((book) => {
            if (book.id === bookIdToUpdate) {
                book.read = book.read === "true" ? "false" : "true";
            }
            return book;
        });
    
        localStorage.setItem("bookItem", JSON.stringify(updatedLibrary));
    
        clearBookContainer();
        updatedLibrary.forEach((books) => {
            loadBooks(books);
        });
    })

}

function clearBookContainer() {
    bookContainer.innerHTML = "";
}


