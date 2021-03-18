//create ajax function using xml
function ajax(scr, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.open('GET', scr);
    xhr.send();
}

//a function that takes a JS object as an argument
//and renders its information on index.html
function render(data) {
    const block = document.createElement('section');
    //function to append content to the section element
    const appendToBlock = (...content) => {
        content.forEach(arg => {
            block.append(arg)
        })
    };
    //loop through data to access and display item information
    data.forEach((item, index) => {
        //label the item names and append to h3 element
        const h3 = document.createElement('h3');
        h3.append(`${index + 1}) ${item.name}`);
        //append name, price, and description to block 
        appendToBlock(
            h3,
            `價格: $${item.price}`,
            document.createElement('br'),
            `簡述: ${item.description}`,
            document.createElement('hr')
        );
    })
    //append entire block to the html body
    document.body.appendChild(block);
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
    render(response);
});