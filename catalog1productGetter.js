

// function catalog1Func(e) {
//     let activeVal = e.text
//     catalog1ValChecker(activeVal)
//     console.log(activeVal);
// }

function newFunc(ProductId) {
    console.log("Product id", ProductId);
    catalog1ValChecker(ProductId)
}


// async function catalog1ValChecker(activeVal) {
//     await fetch("./Product Data/Catalog1data.json")
//         .then((response) => {
//             return response.json()
//         })
//         .then((obj) => {

//             for (let i = 0; i < obj.length; i++) {
//                 if (obj[i].Product__Name == activeVal) {
//                     let currentCatalog1Product = obj[i]
//                     let currentCat1ProductIntoString = JSON.stringify(currentCatalog1Product);
//                     localStorage.setItem("CurrentSelectedProduct", currentCat1ProductIntoString);
//                     window.location.href = "SelectedCatalog.html"
//                     break;
//                 }
//                 else {
//                     console.log("not getting the value")
//                     break;
//                 }
//             }

//         })
//         .catch(function (error) {
//             console.error("There is some error");
//         })

// }





async function catalog1ValChecker(productId) {
    await fetch("./Product Data/Catalog1data.json")
        .then((response) => {
            return response.json()
        })
        .then((obj) => {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].Id == productId) {
                    console.log("done", obj[i]);
                    let currentCatalog1Product = obj[i]
                    let currentCat1ProductIntoString = JSON.stringify(currentCatalog1Product);
                    localStorage.setItem("CurrentSelectedProduct", currentCat1ProductIntoString);
                    window.location.href = "SelectedCatalog.html"
                    break;
                }
                // else {
                //     console.log("not getting the value")
                //     break;
                // }
            }

        })
        .catch(function (error) {
            console.error("There is some error");
        })

}


catalog1ValChecker()