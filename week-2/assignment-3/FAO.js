// A function to calculate the average price of all products
function avg(data) {
    // get the sum of the all product prices
    let sum = 0;
    data.products.forEach(item => sum += item.price);
    // the average price is the sum of all prices divided by the amount of products
    const average = sum / data.size;
    //display and return average price
    console.log(average);
    return average;
}

avg({
    size: 3,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
}); // show the average price of all products