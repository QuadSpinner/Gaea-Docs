//if (window.layoutHelpers) {
//    window.layoutHelpers.setAutoUpdate(true);
//}
//function changeStyle() {
//    if (Cookies.get('style') == "dark") {
//        $('head').append('<link rel="stylesheet" href="/assets/custom/dark.css" id="cssx" type="text/css" />');
//        $("#logo").prop("src", "/images/Gaea_Logo_LightAlt.png");
//        $("#cb1").prop("checked", true);
//    } else {
//        $("#cssx").remove();
//        $("#logo").prop("src", "/images/Gaea_Logo_Dark.png");
//        $("#cb1").prop("checked", false);
//    }
//}
//function setStyle() {
//    if (document.getElementById("cb1").checked) {
//        Cookies.set('style', 'dark');
//    } else {
//        Cookies.set('style', 'light');
//    }
//    changeStyle();
//}
$(document).ready(function () {

    if ($("body").data("hive") !== "") {
        $(".crumbs").append('<a class="section" href="/">Gaea Docs</a>');
        $(".crumbs").append('<div class="divider"> / </div>');
        $(".crumbs").append('<a class="section" href="/' +
            $("body").data("hivehref") +
            '">' +
            $("body").data("hive") +
            '</a>');
        $(".crumbs").append('<div class="divider"> / </div>');

        if ($("body").data("parent") !== "") {
            $(".crumbs").append('<span class="section">' + $("body").data("parent") + '</span>');
            $(".crumbs").append('<div class="divider"> / </div>');
        }
        $(".crumbs").append('<span class="section active">' + $("body").data("title") + '</li>');
    }

    if ($("body").data("hivehref") !== "") {
        var goto;
        $("#main-nav").load("/navs/" + $("body").data("hivehref") + "-n.html",
            function (responseTxt, statusTxt) {
                if (statusTxt === "success") {

                    $("a.item").each(function () {
                        if (window.location.href.indexOf($(this).attr("href")) > -1) {

                            goto = $(this);
                            $(this).addClass("active");
                            $(this).parent().addClass("active");
                            $("#main-nav").scrollTop($(this).offset().top - 80);

                        }
                    });

                }
            });

        $("#toc").load("/navs/" + $("body").data("hivehref") + "-n.html");
    }

    $(".article .main h2").addClass("ui dividing header");
    $(".article .main h2").first().removeClass("dividing");
    $(".article .main .example h4").addClass("ui header");

    $(".article .main img").each(function() {
        if (!$(this).hasClass("ui")) {
            $(this).addClass("ui image fluid");
        }
    });

    $(".NOTE").each(function () {
        var $html = $(this).html();
        $(this).replaceWith(
            "<div class='ui message yellow small'><span class='ui label horizontal mini yellow'>NOTE</span>" +
            $html +
            "</div>");
    });

    $(".WARNING").each(function () {
        var $html = $(this).html();
        $(this).replaceWith(
            "<div class='ui message red small'><span class='ui horizontal label mini red'>WARNING</span>" +
            $html +
            "</div>");
    });

    $(".TIP").each(function () {
        var $html = $(this).html();
        $(this).replaceWith(
            "<div class='ui message blue small'><span class='ui horizontal label mini blue'>TIP</span>" +
            $html +
            "</div>");
    });

    $(".INFO").each(function () {
        var $html = $(this).html();
        $(this).replaceWith(
            "<div class='ui message teal small'><span class='ui horizontal label mini teal'>INFO</span>" +
            $html +
            "</div>");
    });
});