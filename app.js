const currentLocation = location.href;
const menuItem = document.getElementsByClassName("headerItem")

const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "highlighted";
    }
}
console.log(currentLocation);


async function checking(currentValue) {
    await fetch("./Product Data/Data.json")
        .then((response) => {
            return response.json()
        })
        .then((obj) => {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].Product__Name == currentValue) {
                    let slectedProduct = obj[i]
                    let slectedProductIntoString = JSON.stringify(slectedProduct);
                    localStorage.setItem("CurrentSelectedProduct", slectedProductIntoString)
                    window.location.href = "SelectedCatalog.html"
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
    console.log(currentValue);
}


var random = document.getElementById("random").innerHTML = create_random_string(6)

function create_random_string(string_length) {
    var random_string = "";
    var characters = "asdfaksdjf-askdfjaf546a8d6asdf4asdfasdf84asdf6a5s4df6as8df79"
    for (var i, i = 0; i < string_length; i++) {
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return random_string
}






