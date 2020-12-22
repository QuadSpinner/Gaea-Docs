$(document).ready(function () {

    var data;

    function initSearchObjects() {

        $("#quicksearch").load("/search.json", function (responseTxt, statusTxt) {
            if (statusTxt == "success") {
                data = JSON.parse(responseTxt);
                window.idx = lunr(function () {
                    this.ref('id');
                    this.field('url');
                    this.field('title');
                    this.field('text');

                    for (var i = 0; i < data.length; ++i) {
                        this.add($.extend({ "id": i }, data[i]));
                    }
                });
            }
        });
    }

    $("#search-field").keyup(function (e) {
        if (e.which == 27) {
            hideSearch();
        } else {
            quickSearch();
        }
    });

    function showSearch() {
        $("#quicksearch").removeClass("d-none").addClass("d-block");
        $("#main").addClass("has-search");
    }

    function hideSearch() {
        $("#quicksearch").addClass("d-none").removeClass("d-block");
        $("#main").removeClass("has-search");
    }

    $("#main-content").click(function () {
        if ($("#main").hasClass("has-search"))
            hideSearch();
    });

    $("#search-field").focus(function () {
        if (data == null) {
            initSearchObjects();
        } else {
            quickSearch();
        }
    })

    $(this).keyup(function (e) {
        if (e.which === 8) {
            $("#search-field").focus();
        }
    })

    function showInstructions() {
        var $search_results = $("#quicksearch");
        $search_results.empty();
        $search_results.append("<ul>");
        $search_results.append("<li><a href='#'>No results found!<br><span>If your word is incomplete, try typing the whole word, or add a * to the end of the search term.</span></a></li>");
        $search_results.append("</ul>");
    }

    function display_search_results(results) {

        var $search_results = $("#quicksearch");

        if (results.length) {
            $search_results.empty();
            $search_results.append("<ul>");
            results.forEach(function (result) {
                var rdata = data[result.ref];
                $search_results.append('<li><a class="font-weight-bold" href="' + rdata.url + '">' + rdata.title + '<small>' + rdata.hive + '</small></a></li>');
            });
            $search_results.append("</ul>");
        } else {
            showInstructions();
        }

        showSearch();
    }

    function quickSearch() {
        event.preventDefault();
        if (data == null)
            return;
        var q = $("#search-field").val();
        //q = q.replace(/[^a-zA-Z]/g, '')

        if (q.length > 3) {
            var results = window.idx.search(q);
            display_search_results(results);
        } else if (q.length == 0) {
            hideSearch();
        } else {
            showSearch();
            showInstructions();
        }
    }
});