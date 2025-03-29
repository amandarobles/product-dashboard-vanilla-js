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