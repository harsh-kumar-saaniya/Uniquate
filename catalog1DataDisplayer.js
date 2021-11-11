

async function catalog1DataReflector() {

    await fetch("../Product Data/Catalog1data.json")
        .then((response) => {
            return response.json()
        })
        .then((obj) => {
            let catalog1Data = JSON.stringify(obj)
            sessionStorage.setItem("Catalog1Data", catalog1Data)
        })
        .catch(function (error) {
            console.error("There is some error");
        })
}

catalog1DataReflector()




var Catalog1ParsedData = JSON.parse(sessionStorage.getItem("Catalog1Data"));




var catalog1ProductDiv = document.getElementById('Catalog1DataDis');
let actualPage = 1;
let totalRows = 12;

function Catalog1DataDisplayerInCard(Cat1items, containerWrapper, rowsPerPage, exacPage) {
    containerWrapper.innerHTML = '';
    exacPage--;

    let startingPoint = rowsPerPage * exacPage;
    let endingPoint = startingPoint + rowsPerPage;
    let Cat1paginatedItems = Cat1items.slice(startingPoint, endingPoint);

    for (let i = 0; i < Cat1paginatedItems.length; i++) {
        containerWrapper.innerHTML += `<div class="productRow">
                         <div class="productCart">
                             <div class="productImage">
                                 <img
                                     src="${Cat1paginatedItems[i].Product__Image}" />
                             </div>
                             <div class="productDetaildiv">
                                 <div class="productNameDiv">
                                     <p class="productname">
                                         <a href="#">${Cat1paginatedItems[i].Product__Name}</a>
                                     </p>
                                 </div>
                                 <div class="priceDiv">
                                     <p class="price">Price:${Cat1paginatedItems[i].Price} </p>
                                 </div>
                                 <div class="stockDiv">
                                     <p class="stock">In Stock: <span style="font-weight: bold;">${Cat1paginatedItems[i].Stock}</span> </p>
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

Catalog1DataDisplayerInCard(Catalog1ParsedData, catalog1ProductDiv, totalRows, actualPage);




const pageChanger = (pagenumber) => {
    actualPage = pagenumber;
    Catalog1DataDisplayerInCard(Catalog1ParsedData, catalog1ProductDiv, totalRows, actualPage);
}


const ulTage = document.getElementById('ulList');
let totalpages = 1125;

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
