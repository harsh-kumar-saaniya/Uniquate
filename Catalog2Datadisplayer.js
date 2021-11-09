

async function catalog2DataReflector() {

    await fetch("../Product Data/Data.json")
        .then((response) => {
            return response.json()
        })
        .then((obj) => {
            let currentData = JSON.stringify(obj)
            sessionStorage.setItem("currentdata", currentData)

        })
        .catch(function (error) {
            console.error("There is some error");
        })
}

catalog2DataReflector()

var JsonDATA = JSON.parse(sessionStorage.getItem("currentdata"));


var prodductsDiv = document.getElementById('prodductsDiv');
let current_Page = 1;
let rows = 12;

function DisplayerList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = '';
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        wrapper.innerHTML += `<div class="productRow">
                         <div class="productCart">
                             <div class="productImage">
                                 <img
                                     src="${paginatedItems[i].Product__Image}" />
                             </div>
                             <div class="productDetaildiv">
                                 <div class="productNameDiv">
                                     <p class="productname">
                                         <a href="#">${paginatedItems[i].Product__Name}</a>
                                     </p>
                                 </div>
                                 <div class="priceDiv">
                                     <p class="price">Price:${paginatedItems[i].Price} </p>
                                 </div>
                                 <div class="stockDiv">
                                     <p class="stock">In Stock: <span style="font-weight: bold;">${paginatedItems[i].Stock}</span> </p>
                                 </div>
                                 <div class="Qty">
                                     Qty: <input type="text" name="Quantity" placeholder="1" class="qty">
                                     <button>Add to Cart</button>
                                 </div>
                             </div>
                         </div>
                     </div>
                     `
    }
}

DisplayerList(JsonDATA, prodductsDiv, rows, current_Page);

const pageChanger = (pagenumber) => {
    current_Page = pagenumber;
    DisplayerList(JsonDATA, prodductsDiv, rows, current_Page);
}

const ulTage = document.getElementById('ulList');
let totalpages = 27;

function element(totalPages, page) {
    pageChanger(page);
    let liTage = "";
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;
    if (page > 1) {
        liTage += `<li class="btn prev" onclick="element(totalpages, ${page - 1})"><span> Prev</span></li>`;
        pageChanger(page);
    }

    if (page > 2) {
        liTage += `<li class="numb" onclick="element(totalpages, 1)"><span>1</span></li>`;
        if (page > 3) {
            liTage += `<li class="dots"><span>...</span></li>`;
        }
    }
    if (page == totalPages) {
        beforePages = beforePages - 2
    }
    else if (page == totalPages - 1) {
        beforePages = beforePages - 1
    }

    if (page == 1) {
        afterPages = afterPages + 2
    }
    else if (page == 2) {
        afterPages = afterPages + 1
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if (pageLength > totalPages) {
            continue;
        }
        if (pageLength == 0) {
            pageLength = pageLength + 1
        }
        if (page == pageLength) {
            activeLi = "active";
        }
        else {
            activeLi = "";
        }
        liTage += `<li class="numb ${activeLi}" onclick="element(totalpages, ${pageLength})"><span>${pageLength}</span></li>`;

    }

    if (page < totalpages - 1) {
        if (page < totalPages - 2) {
            liTage += `<li class="dots"><span>...</span></li>`;
        }
        liTage += `<li class="numb" onclick="element(totalpages, ${totalPages})"><span>${totalpages}</span></li>`;
    }
    if (page < totalPages) {
        liTage += `<li class="btn next" onclick="element(totalpages, ${page + 1})"><span>Next</span></li>`;
    }

    ulTage.innerHTML = liTage;

}


element(totalpages, 1);

