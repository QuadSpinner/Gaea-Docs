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
        let goto;
        $("#main-nav").load("/navs/" + $("body").data("hivehref") + "-m.html",
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

                    $('.ui.accordion').accordion();
                }
            });

        $("#toc").load("/navs/" + $("body").data("hivehref") + "-m.html");


        $("#top-nav .item").each(function () {
            if ($(this).data("hive") == $("body").data("hivehref")) {
                $(this).addClass("active");
            }
        });
    }

    $(".previewer").click(function () {
        const labs = $(this).data("labels");
        $("#modaltitle").text($(this).data("flub"));
        //$("#modalslider").slider({
        //    interpretLabel: function (value) {
        //        return labels[labs];
        //    }
        //});
        $('.ui.basic.modal').modal('show');
    });

    $(".article .main h2").addClass("ui dividing header");
    $(".article .main .example h4").addClass("ui header");

    if ($("body").data("hivehref") === "Reference") {
        const h2 = $("div.main.ui.intro.container").prepend("<h2 class='hidden'>" + $("body").data("title") + "</h2>");
    }

    $(".article .main img").each(function () {
        if (!$(this).hasClass("ui")) {
            $(this).addClass("ui image fluid");
        }

        if ($(this).attr("alt") != null) {
            $(this).wrap("<figure></figure>");
            $(this).after("<figcaption>" + $(this).attr("alt") + "</figcaption>");
        }
    });

    function isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }

    $("code").each(function () {
        if (isNumeric($(this).text().replace("%", ""))) {
            $(this).addClass("val")
        }
    });

    function messageCss(target, msg, lbl, icon, text) {
        $(target).each(function () {
            const $html = $(this).html();
            $(this).replaceWith(
                "<div class='ui message " + msg + " small'><span class='ui label horizontal mini " + lbl + "'><i class='ti " + icon + "'></i> " + text + "</span>" +
                $html +
                "</div>");
        });
    }

    messageCss(".NOTE", "purple", "purple", "ti-note", "NOTE");
    messageCss(".WARNING", "warning", "red", "ti-alert-circle", "WARNING");
    messageCss(".TIP", "info", "blue", "ti-bulb", "TIP");
    messageCss(".INFO", "info", "teal", "ti-info-circle", "INFO");

    if ($("#related").length) {

        let relhtml = '<div class="ui vertical fluid menu"><div class="item"><div class="header">Related topics</div><div class="menu">';

        $("#related p a").each(function () {
            relhtml += '<a class="item" href="' + $(this).attr("href") + '"> <i class="ti ti-arrow-narrow-right"></i> ' + $(this).html() + '</a>';
        });

        relhtml += "</div></div></div></div>";

        $("#related").html(relhtml);
    }
    ;
});