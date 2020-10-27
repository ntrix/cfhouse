const products = [
    "imgProduct2",
    "imgProduct3",
    "imgProduct4",
    "imgProduct5",
    "imgProduct6",
    "productLatte",
];
for (let product of products) {
    $("#js_carousel__1").append(`
<div class="owl--slides">
<a><img src="images/detail/${product}.jpg" loading="lazy" alt="${product}" class="img-thumbnail"/></a>
</div>
`);
}

const others = [
    "product1",
    "product2",
    "product3",
    "product4",
    "product2",
    "product4",
];
for (let other of others) {
    $("#js_carousel__2").append(`
<div class="owl--slides2">
<a href="product.html"><img src="images/detail/${other}.jpg" loading="lazy" alt="${other}" class="img-responsive"/></a>
</div>
`);
}

$("#js_carousel__1").owlCarousel({
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2900,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: { items: 3, center: true },
        768: { items: 3 },
        992: { items: 4 },
    },
});

$("#js_carousel__2").owlCarousel({
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3100,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: { items: 2 },
        768: { items: 4 },
    },
});

$("#js_carousel__1 img").click(function () {
    let imgSrc = $(this).attr("src");
    $("#large-box img").attr("src", imgSrc);
});
