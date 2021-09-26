$(document).ready(function () {
    if ($("body").data("hivehref") !== "") {
        let goto;
        $("#main-nav").load("/navs/" + $("body").data("hivehref") + "-n.html",
            function (responseTxt, statusTxt) {
                if (statusTxt === "success") {
                    $('.ui.accordion').accordion({
                        animateChildren: false,
                        exclusive: true
                    });

                    $("a.subitem").each(function () {
                        if (window.location.href.indexOf($(this).attr("href")) > -1) {
                            goto = $(this);
                            $(this).addClass("active");
                            $(this).parent().parent().addClass("active").children("div").addClass("active");
                            $(this).parent().parent().parent().addClass("active");
                            $("#main-nav").scrollTop($(this).offset().top - 80);
                        }
                    });

                }
            });

        $("#toc").load("/navs/" + $("body").data("hivehref") + "-m.html");


        $("#top-nav .item").each(function () {
            if ($(this).data("hive") == $("body").data("hivehref")) {
                $(this).addClass("active");
            }
        });
    }

    $('.ui.embed').embed();

    $(".previewer").click(function () {
        const labs = $(this).data("labels");

        const flub = $(this).data("flub");
        $("#modaltitle").text(flub);

        var slider = $("#modalslider").slider({
            min: 0, max: labs.length - 1,
            interpretLabel: function (value) { return labs[value]; },
            onMove: changeModal,
        });

        function changeModal() {
            const val = slider.slider("get value");
            $("#modalimage").attr("src", "/images/Paraminator/" + $("body").data("title") + "/" + flub.replace(" ", "-") + "/" + val + ".webp");
            $("#modaltitle").text(flub + " - " + labs[val]);
        }

        changeModal();
        $('.ui.medium.modal').modal({}).modal('show');
    });

    $(".prev-link").each(function () { if ($(this).attr("href") === "") { $(this).hide(); } });
    $(".next-link").each(function () { if ($(this).attr("href") === "") { $(this).hide(); } });

    $(".article .main h2").addClass("ui dividing header");
    $(".article .main .example h4").addClass("ui header");

    $("hr").replaceWith('<div class="ui divider"></div>');

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
        if (typeof str != "string") return false;
        return !isNaN(str) && !isNaN(parseFloat(str));
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
                "<div class='ui message small'><span class='ui label horizontal mini " + lbl + "'><i class='ti " + icon + "'></i> " + text + "</span>" +
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
    };

    $("#results").load("/search.json", function (responseTxt, statusTxt) {
        if (statusTxt == "success") {
            data = JSON.parse(responseTxt);
            $('.ui.search')
                .search({
                    source: data,
                    fields: {
                        description: 'hive',
                        title: 'title',
                        url: 'url'
                    },
                    searchFields: [
                        'title', 'text'
                    ],
                    fullTextSearch: 'exact',
                    minCharacters: 2,
                    maxResults: 12,
                    showNoResults: true
                });
        }
    });

    $(window).resize(function () {
        showHide();
    });

    showHide();

    function showHide() {

        if ($(window).width() > 960) {
            $(".pc-only").show();
        } else {
            $(".pc-only").hide();
        }
    }
});