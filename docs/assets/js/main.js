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
    $(".article .main .example h4").addClass("ui header");

    $(".article .main img").each(function () {
        if (!$(this).hasClass("ui")) {
            $(this).addClass("ui image fluid");
        }

        if ($(this).attr("alt") != null) {
            $(this).wrap("<figure></figure>");
            $(this).after("<figcaption>" + $(this).attr("alt") + "</figcaption>");
        }
    });


    function messageCss(target, msg, lbl, icon, text) {
        $(target).each(function () {
            var $html = $(this).html();
            $(this).replaceWith(
                "<div class='ui message " + msg + " small'><span class='ui label horizontal mini " + lbl + "'><i class='ti " + icon + "'></i> " + text + "</span>" +
                $html +
                "</div>");
        });
    }

    messageCss(".NOTE", "secondary", "purple", "ti-note", "NOTE");
    messageCss(".WARNING", "warning", "red", "ti-alert-circle", "WARNING");
    messageCss(".TIP", "info", "blue", "ti-bulb", "TIP");
    messageCss(".INFO", "info", "teal", "ti-info-circle", "INFO");
});