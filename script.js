// why capital letter?
let ProductName=document.getElementById('ProductName');
let price = document.getElementById ("price");
let button=document.getElementById('button');
let productSelect=document.getElementById('product');
let inputImage=document.getElementById('image');
// better name, everything is "data"
let dataArr = []
button.addEventListener('click',function(){
    // this function is too long, you need to split it to cpuple of fucntions.
    let table = document.getElementById("productTable");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    
    let textNode1 = document.createTextNode(ProductName.value);
    let textNode2 = document.createTextNode(price.value);
    let textNode3 = document.createTextNode(productSelect.value);

    let img = document.createElement("img");
    img.src = inputImage.value;

    cell1.appendChild(textNode1);
    cell2.appendChild(textNode2);
    cell3.appendChild(textNode3);
    cell4.appendChild(img);
    // nice!
    dataArr.push({product: ProductName, price: price, img: inputImage, type:productSelect})
    // this needs to be a function
    ProductName.value = ''; 
price.value='';
inputImage.value=''; 
productSelect.value='';
})

// You did not did the bonus 
