const F = document.querySelector.bind(document);

$('#page-top').append(`
    <div id="shadow--mobile"></div>
    <div class="container">
        <div class="col-xs-3" id="logo">
            <a href="index.html"
                ><img src="images/logo.png" alt="logo"
            /></a>
        </div>
        <nav class="col-xs-9 text-right">
            <ul>
                <li id="js_hamburger-menu">
                    <p class="btn btn-xs"><i class="fas fa-bars"></i></p>
                </li>
                <li>
                    <label for="search__field">
                        <i class="fas fa-search" id="search__icon"></i>
                    </label>
                </li>
                <li><input type="text" id="search__field" /></li>

                <div class="hidden-xs">
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#footer">Carrier</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="product.html#filter">Menu</a></li>
                    <li><a href="#feature">Shop</a></li>
                </div>
            </ul>
        </nav>
        <div class="col-xs-10" id="nav--mobile">
            <ul>
                <li><a href="#feature">Shop</a></li>
                <li><a href="product.html#filter">Menu</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#footer">Carrier</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>`
);

$("#shadow--mobile").hide();
$("#nav--mobile").hide();
$("#search__field").hide();

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
