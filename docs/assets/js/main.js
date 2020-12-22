if (window.layoutHelpers) {
    window.layoutHelpers.setAutoUpdate(true);
}
function changeStyle() {
    if (Cookies.get('style') == "dark") {
        $('head').append('<link rel="stylesheet" href="/assets/custom/dark.css" id="cssx" type="text/css" />');
        $("#logo").prop("src", "/images/Gaea_Logo_LightAlt.png");
        $("#cb1").prop("checked", true);
    } else {
        $("#cssx").remove();
        $("#logo").prop("src", "/images/Gaea_Logo_Dark.png");
        $("#cb1").prop("checked", false);
    }
}
function setStyle() {
    if (document.getElementById("cb1").checked) {
        Cookies.set('style', 'dark');
    } else {
        Cookies.set('style', 'light');
    }
    changeStyle();
}
$(document).ready(function () {
    $('#cb1').on('click', function () { setStyle(); });
    $("#small-nav-dropdown").change(function () {
        if ($(this).val() != '') { window.location.href = $(this).val(); }
    });
    $("video").parent().addClass("video-holder");

    $(".top-nav").each(function () {
        if (window.location.href.indexOf($(this).attr("href")) > -1) {
            $(this).parent().addClass("active");
        }
    });

    if ($("body").data("hive") !== "") {
        $(".breadcrumb").append('<li class="breadcrumb-item"><a href="/">Home</a></li>');
        $(".breadcrumb").append('<li class="breadcrumb-item"><a href="/' + $("body").data("hivehref") + '">' + $("body").data("hive") + '</a></li>');
        if ($("body").data("parent") !== "") {
            $(".breadcrumb").append('<li class="breadcrumb-item"><a href="/' + $("body").data("hivehref") + '/' + $("body").data("parenthref") + '">' + $("body").data("parent") + '</a></li>');
        }
        $(".breadcrumb").append('<li class="breadcrumb-item active">' + $("p.faux-h1").text() + '</li>');
    }

    if ($("body").data("hivehref") !== "") {
        $("#main-nav").load("/navs/" + $("body").data("hivehref") + "-n.html", function (responseTxt, statusTxt) {
            if (statusTxt === "success") {
                $(".xref").each(function () {
                    if (window.location.href.indexOf($(this).children("a").attr("href")) > -1) {
                        $(this).addClass("active");
                        $(this).parent().addClass("in");
                        const outer = $(this).parent().parent();
                        $(outer).addClass("expanded");
                        $(outer).addClass("active");
                        $(outer).removeClass("collapsed");
                    }
                });
            }
        });
    }
});
changeStyle();
