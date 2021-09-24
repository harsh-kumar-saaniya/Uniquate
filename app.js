async function checking(currentValue) {
    await fetch("./Product Data/Data.json")
        .then((response) => {
            return response.json()
        })
        .then((obj) => {
            for(let i =0; i<obj.length;i++){
                if(obj[i].Product__Name == currentValue){
                    let slectedProduct = obj[i]
                    let slectedProductIntoString = JSON.stringify(slectedProduct);
                    localStorage.setItem("CurrentSelectedProduct",slectedProductIntoString)
                    window.location.href = "catalog2.html";
                }
            }
        })
        .catch(function (error) {
            console.error("There is some error");
        })
}


function myfunc(e) {
    var currentValue = e.text
    checking(currentValue)

}
