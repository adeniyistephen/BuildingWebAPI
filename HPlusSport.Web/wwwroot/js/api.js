var url = "https://localhost:44315/products";    /*<-- The Api Localhost from the Api in the project.*/

var productsList = document.getElementById("products-list");
if (productsList) {
    fetch(url)
        .then(response => response.json())
        .then(data => showProducts(data))
        .catch(ex => {
            alert("Something went wrong ...");
            console.log(ex);
        });
}

function showProducts(products) {
    products.forEach(product => {
        let li = document.createElement("li");
        let text = `${product.name} ($${product.price})`;
        li.appendChild(document.createTextNode(text));
        productsList.appendChild(li);
    });
}

