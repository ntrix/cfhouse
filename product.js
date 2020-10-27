const linkDetail = "detail.html#",
    linkAdd = "#",
    linkOrder = "indexJS.html#payment";

const imagesPath = "images/product/";
function renderItems(sectionName, items) {
    $("#js_main").append(`
<section class="row d-flex" id="${sectionName}">
<div class="col-xs-12 section__label">&diams; ${sectionName.toUpperCase()}</div>
</section>`);
    for (let item of items) {
        $("#" + sectionName).append(`
<div id="${item}" class="product-card card--actions">
<img loading="lazy" alt="${item}" src="${
            imagesPath + item
        }.jpg">
<div class="card--actions__overlay">
    <div><a href="${
            linkDetail + item
        }" class="actions__btn">Details</a></div>
    <div><a href="${
            linkAdd + item
        }" class="actions__btn">Add to cart</a></div>
    <div><a href="${linkOrder}" class="actions__btn">Order</a></div>
</div>
</div>`);
    }
}

const specialties = [
    "specialty1",
    "lycheeTea",
    "specialty3",
    "specialty4",
    "specialty5",
    "specialty6",
];
renderItems("specialties", specialties);

const expresso = [
    "expresso1",
    "expresso2",
    "expresso3",
    "expresso4",
    "expresso5",
];
renderItems("expresso", expresso);

const latte = ["latte1", "latte2", "latte3"];
renderItems("latte", latte);

const mocktail = [
    "mocktail1",
    "mocktail2",
    "mocktail3",
    "mocktail4",
];
renderItems("mocktail", mocktail);

const dessert = ["dessert1", "dessert2", "dessert3"];
renderItems("dessert", dessert);
