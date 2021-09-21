// var jsonData = require('./Product Data/Data.json');
import Data from './Product Data/Data.json';

console.log("working fine")


function show() {
    var CURRENT_URL = window.location.href;
    var path = window.location.pathname;
    var page = path.split("/").pop();

    var newUrl = 
    console.log("Getting url", CURRENT_URL);
    console.log("Getting pathname", path);
    console.log("page name is ", page);
    page = "/hello world"
    page.join("/yes done")
    console.log("second page name", page)
    console.log("this is working from function!!")
}

LinkManager = () => { }



async function show() {
    var data = await fetch(jsonData)
    console.log(data)
    
    
    const show = (e)=> {
        
        if (Data['Crunchmaster®|Multi-Grain Crackers|Original Grain Multi-Seed Crackers|2 10 oz Bags'].Prodcuct_Name == e.text) {
            
            console.log("link value", e.text);
        }
        else {
            console.log("not");
        }
    }
}
    


fetch("./Product Data/Data.json")
    .then(response => response.json())
    .then(json => console.log(json))