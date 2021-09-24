var productNameH2 = document.getElementById("productNameH2");
var stockValue = document.getElementById("stockValue");
var currentProductImage = document.getElementById("currentProductImage");




var productCurrentData = JSON.parse(localStorage.getItem('CurrentSelectedProduct'))

console.log(productCurrentData);

productNameH2.innerHTML = productCurrentData.Product__Name;
currentProductImage.src = productCurrentData.Product__Image;
stockValue.innerHTML = productCurrentData.Stock;


