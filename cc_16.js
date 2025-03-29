// Task 2: Fetch Products with .then()
function fetchProductsThen() { //creating function 
    fetch("https://www.course-api.com/javascript-store-products") //sourcing product data
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            console.log(product.fields.name); //logging product name to console
        });
    })
    .catch(error => {
        console.error("Fetch error:", error); //logging errors
    });
}