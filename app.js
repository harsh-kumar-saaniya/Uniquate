import Data from './Product Data/Data.json';
require

// console.log("working fine")


// function show() {
//     // var CURRENT_URL = window.location.href;
//     var path = window.location.pathname;
//     var page = path.split("/").pop();
    
//     // var newUrl = 
//     // console.log("Getting url", CURRENT_URL.);
//     console.log("Getting pathname", path);
//     console.log("page name is ", page);
//     page = "/hello world"
//     page.join("/yes done")
//     console.log("second page name", page)
//     console.log("this is working from function!!")
// }

// LinkManager = () => {
// }



function show(e) {
    if(Data['Crunchmaster®|Multi-Grain Crackers|Original Grain Multi-Seed Crackers|2 10 oz Bags'].Prodcuct_Name == e.text){

        console.log("link value", e.text);
    }
    else{
        console.log("not");
    }
}