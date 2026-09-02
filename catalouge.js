let cartCount = 0;

function addToCart(bookName) {
    cartCount++;

    document.getElementById("cart").innerHTML =
        "🛒 Cart: " + cartCount + " books";

    alert(bookName + " has been added to your cart!");
}

function searchBooks() {

    let search = document.getElementById("searchBox").value.toLowerCase();

    let books = document.getElementsByClassName("book");

    for (let i = 0; i < books.length; i++) {

        let bookName = books[i].innerText.toLowerCase();

        if (bookName.includes(search)) {
            books[i].style.display = "block";
        } else {
            books[i].style.display = "none";
        }
    }
}
