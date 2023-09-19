document.addEventListener("DOMContentLoaded", function() {
    fetchBooks()
});

function fetchBooks() {
    fetch("url")
    .then(resp=> resp.json())
    .then(booksArr => booksArr.forEach(renderBookTitle))
}

function renderBookTitle(book) {
    const bookTitleList = document.getElementById("List")
    const bookTitle = document.createElement("li")
    bookTitle.innerText = book.title
    bookTitleList.append(bookTitle)
    bookTitle.addEventListener("click", (book) => renderBookDetails(book))
}


function renderBookDetails(book) {
    const {title, subtitle, description, author, img_url, users} = book
    const bookDetailsDiv = document.querySelector('#show-panel')
    
    const bookTitle = document.createElement('h1')
    const bookSub = document.createElement('h3')
    const bookDes = document.createElement('p')
    const bookAuthor = document.createElement('h3')
    const bookImg = document.createElement('img')
    
    bookTitle.textContent = title
    bookSub.textContent = subtitle
    bookDes.textContent = description
    bookAuthor.textContent = author
    bookImg.src = img_url

    const usersContainer = document.createElement('ul')

    users.forEach((user) => {
        console.log(user)
        const userLi = document.createElement('li')
        userLi.textContent = user.username
        usersContainer.append(userLi)
    })

    bookDeetailsDiv.append(bookImg, bookTitle, bookSub, bookAuthor, bookDes, userContainer)
}