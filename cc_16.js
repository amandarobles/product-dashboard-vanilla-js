// Task 2: Fetch Products with .then()
function fetchProductsThen() { //creating function 
    fetch("https://www.course-api.com/javascript-store-products") //sourcing product data
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(product => {
            console.log(product.fields.name); //logging product name to console
        });
    })
    .catch(error => {
        console.error("Fetch error:", error); //logging errors
    });
}

// Task 3: Fetch Products with async/await
async function fetchProductsAsync() { //creating function
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products"); //fetching product data
        if (!response.ok) {
            throw new Error (`HTTP error! status: ${response.status}`);
        } 
        const data = await response.json();
        displayProducts(data);  //rendering products to page
    } catch (error) {
        handleError(error); //passed if error occurs
    }
}

// Task 4: Display the Products
function displayProducts(products) { //writing function
    const productContainer = document.querySelector("#product-container"); //selecting #product-container
    if (!productContainer) {
        console.error("No product container found in the DOM.");
        return;
    }
    productContainer.innerHTML = "";
    const productsToShow = products.slice(0,5); //looping through first 5 products
    productsToShow.forEach(product => {
        const productCard= document.createElement("div");
        productCard.className = "product-card";

        const img =document.createElement("img"); //creating HTML elements
        img.src =product.fields.image[0].url;
        img.alt= product.fields.name;
        img.className= "product-name";

        const price = document.createElement("p");
        price.textContent = `$${(product.fields.price / 100).toFixed(2)}`;
        price.className = "product-price";

        productCard.append(img, name, price); //appending to container
        productContainer.appendChild(productCard);
    });
}