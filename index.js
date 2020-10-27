const topItems = ["expresso", "latte", "mocktail", "dessert"];
for (let item of topItems) {
  $("#js_products").append(`
    <div class="col-md-3 col-xs-6 product-card">
      <a href="product1.html#${item}">
        <img src="images/product/top/${item}.jpg" loading="lazy" alt="${item}" class="img-responsive">
      </a>
    </div>`)
}

const F = document.querySelector.bind(document);
$("#shadow--mobile").hide();
$("#nav--mobile").hide();
$("#search__field").hide();

const carouselItems = [
  {
    id: 1,
    title: `Emotion`,
    target: "mocktail",
    className: `btn btn-lg`,
    btnType: `More`,
    active: ` active`,
    content: `<p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae laborum aliquam.</p><p>Quotes & Author</p>`,
  },
  {
    id: 2,
    title: `Chocolate`,
    target: "dessert",
    className: `btn btn-lg`,
    btnType: `Order`,
    content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta <br> nesciunt velit, eos sunt, eum minima, <br>consequatur nobis ut quo ipsum fugit provident! Lorem ipsum dolor <br>sit amet. Lorem ipsum dolor sit amet.</p>`,
  },
  {
    id: 3,
    title: ``,
    target: "specialties",
    className: ``,
    btnType: `<img loading="lazy" alt="deal" id="banner__deal" src="images/banner/deal.png">`,
    content: ``,
  },
  {
    id: 4,
    title: `Coffee`,
    target: "expresso",
    className: ``,
    btnType: ``,
    content: ``,
  },
  {
    id: 5,
    title: `<h1 style="color:#fff">LATTE</h1>`,
    target: "latte",
    className: `btn btn-lg`,
    btnType: `Check It Out`,
    content: `<p>Latte secret is consectetur adipisicing elit. Dicta <br> nesciunt velit, eos sunt, eum minima, <br>consequatur nobis ut quo ipsum fugit provident! Lorem ipsum dolor</p>`,
  },
];
for (let item of carouselItems) {
  $(".carousel-indicators").append(`
    <li data-target="#hero__carousel" data-slide-to="${item.id - 1}" class="${item.active || ""}"></li>`
  );
  $("#js_carousel__items").append(`
    <div class="item${item.active || ""}">
      <img loading="lazy" alt="First slide" class="center-block hidden-xs" src="images/banner/banner${item.id}.jpg">
      <img loading="lazy" alt="First slide" class="center-block visible-xs" src="images/banner/banner${item.id}mobile.jpg">
      <div class="carousel-caption">
        <div class="row">
          <a href="product1.html#${item.target}" class="banner__title">${item.title}</a>
          <div class="banner__content">${item.content}</div>
        </div>
        <a href="product1.html#${item.link}" class="${item.className}">${item.btnType}</a>
      </div>
    </div>`
  );
}

const newsItems = [
  {
    imgSrc: `images/news/image1.jpg`,
    title: `News Title Here`,
    link: `#newsSource`,
    content: `<p>Starbuck, Highland coffee, the Coffee house is Lorem ipsum dolor sit amet consectetur.</p>`,
  },
  {
    imgSrc: `images/news/image2.jpg`,
    title: `Or Headline Below`,
    link: `#newsSource`,
    content: `<h4>Starbuck, Highland coffee, the Coffee house</h4><p> is Lorem ipsum dolor sit amet consectetur.</p><p>Starbuck, Highland coffee, the Coffee house.</p>`,
  },
  {
    imgSrc: `images/news/image3.jpg`,
    title: `Square Image, Short Article`,
    link: `#newsSource`,
    content: `<p>Starbuck, Highland coffee, the Coffee house is Lorem ipsum dolor sit amet consectetur.</p>`,
  },
  {
    imgSrc: `images/news/image4.jpg`,
    title: `Long Image, Long Article`,
    link: `#newsSource`,
    content: `<p>Starbuck, Highland coffee, the Coffee house is Lorem ipsum dolor sit amet consectetur.</p><p>Starbuck, Highland coffee, the Coffee house.</p><p>Starbuck, Highland coffee, the Coffee house is Lorem ipsum dolor sit amet consectetur.</p><p>Really long article is hidden. Starbuck, Highland coffee, the Coffee house is Lorem ipsum dolor sit amet consectetur.</p>`,
  },
];
for (let n of newsItems) {
  $("#js_news__items").append(`
<div class="news__box">
  <div class="news__article">
    <div class="col-xs-6">
      <a href="${n.link}"><img src="${n.imgSrc}" loading="lazy" alt="" class="img-responsive"></a>
    </div>
    <div class="col-xs-6">
      <a class="news__title" href="${n.link}">${n.title}</a>
      ${n.content}
    </div>
  </div>
</div>`);
}

$("#js_hamburger-menu").click(function () {
  $("#search__field").fadeOut();
  $("#shadow--mobile").fadeToggle();
  $("#nav--mobile").slideToggle();
});

$("#shadow--mobile").click(function () {
  $("#nav--mobile").slideUp();
  $("#shadow--mobile").fadeOut();
});

$("#search__icon").click(function () {
  $("#search__field").fadeToggle();
  F("#search__field").value = "";
});

$("#search__field").keypress(function (event) {
  if (event.keyCode == "13") {
    F("#search__field").value = "";
    $("#search__field").fadeOut();
  }
});
