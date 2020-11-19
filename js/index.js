const topItems = ["expresso", "latte", "mocktail", "dessert"];
for (let item of topItems) {
  $("#js_products").append(`
    <div class="col-md-3 col-xs-6 product-card">
      <a href="product.html#${item}">
        <img src="images/product/top/${item}.jpg" loading="lazy" alt="${item}" class="img-responsive">
      </a>
    </div>`)
}

const carouselItems = [
  {
    id: 1,
    title: `Inspiration`,
    target: "mocktail",
    className: `btn btn-lg`,
    btnType: `More`,
    active: ` active`,
    content: `<p>"Bitter coffee is like a deep life<br>
    Tasting how much is not enough"</p><p>Pham Thi Bich Hoa</p>`,
  },
  {
    id: 2,
    title: `Chocolate`,
    target: "dessert",
    className: `btn btn-lg`,
    btnType: `Order`,
    content: `<p>Chocolate is a word used to describe a type the food is<br>made from the fruit of the cocoa tree. Chocolate is the<br>base ingredient in many candies, ice cream, cakes...</p>`,
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
    content: `When Latte is prepared, the Espresso and the hot milk<br>are mixed, above is still a foam layer<br>but thinner and lighter than Cappucinno.</p>`,
  },
];
for (let item of carouselItems) {
  $(".carousel-indicators").append(`
    <li data-target="#hero__carousel" data-slide-to="${item.id - 1}" class="${item.active || ""}"></li>`
  );
  $("#js_carousel__items").append(`
    <div class="item${item.active || ""}">
      <img alt="slide placeholder" class="center-block hidden-xs" src="images/banner/Placeholder.png">
      <img loading="lazy" alt="slide ${item.id}" class="carousel__img hidden-xs" src="images/banner/banner${item.id}.jpg">
      <img alt="slide placeholder mobile" class="center-block visible-xs" src="images/banner/PlaceholderMobile.png">
      <img loading="lazy" alt="slide ${item.id} mobile" class="carousel__img visible-xs" src="images/banner/banner${item.id}mobile.jpg">
      <div class="carousel-caption">
        <div class="row">
          <a href="product.html#${item.target}" class="banner__title width-20">${item.title}</a>
          <div class="banner__content">${item.content}</div>
        </div>
        <a href="product.html#${item.target}" class="${item.className}">${item.btnType}</a>
      </div>
    </div>`
  );
}

const newsItems = [
  {
    imgSrc: `images/news/image1.jpg`,
    title: `Starbuck and HIghland`,
    link: `#newsSource`,
    content: `<p>Starbuck, Highland coffee, the Coffee house are the famous Trademarks on the market.</p>`,
  },
  {
    imgSrc: `images/news/image2.jpg`,
    title: `Thousand Miles From One Step`,
    link: `#newsSource`,
    content: `<h4>The journey of billion-dollars brand: </h4><p> The famous Trademarks on the market.</p><p>Starbuck, Highland coffee, the Coffee house.</p>`,
  },
  {
    imgSrc: `images/news/image3.jpg`,
    title: `Square But Not Small`,
    link: `#newsSource`,
    content: `<p>Square but not small, short article about Starbuck, Highland coffee and the Coffee house.</p>`,
  },
  {
    imgSrc: `images/news/image4.jpg`,
    title: `The Journey Of Billion-dollars Brand`,
    link: `#newsSource`,
    content: `<p>Starbuck, Highland coffee, the Coffee house are the famous Trademarks on the market.</p><p>Starbuck, Highland coffee, the Coffee house.</p><p>Starbuck, Highland coffee, the Coffee house are the famous Trademark on the market.</p><p>Really long article is hidden. Starbuck, Highland coffee, the Coffee house are the famous Trademark on the market.</p>`,
  },
];
for (let newsItem of newsItems) {
  $("#js_news__items").append(`
<div class="news__box">
  <div class="news__article">
    <div class="col-xs-6">
      <a href="${newsItem.link}"><img src="${newsItem.imgSrc}" loading="lazy" alt="" class="img-responsive"></a>
    </div>
    <div class="col-xs-6">
      <a class="news__title" href="${newsItem.link}">${newsItem.title}</a>
      ${newsItem.content}
    </div>
  </div>
</div>`);
}
