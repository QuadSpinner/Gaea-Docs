$(document).ready(function () {


    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    var data;

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
            results.forEach(function (result) {
                var rdata = data[result.ref];
                $search_results.append('<div class="srx"><a class="font-weight-bold" data-w="' + rdata.w + '" href="' + rdata.url + '">' + rdata.title + '<small>' + rdata.hive + '</small></a></div>');
            });

        } else {
            showInstructions();
        }

    }

    function quickSearch(q) {

        $("#quicksearch").load("/search.json", function (responseTxt, statusTxt) {
            if (statusTxt == "success") {
                data = JSON.parse(responseTxt);
                window.idx = lunr(function () {
                    this.b(0);
                    this.ref('id');
                    this.field('url');
                    this.field('title');
                    this.field('text');

                    for (var i = 0; i < data.length; ++i) {
                        this.add($.extend({ "id": i }, data[i]));
                    }
                });

                console.log(q);
                var results = window.idx.search(q);
                display_search_results(results);

            }
        });

    }

    var queries = {};
    $.each(document.location.search.substr(1).split('&'), function (c, q) {
        var i = q.split('=');
        queries[i[0].toString()] = i[1].toString();
    });

    console.log(document.location.search);
    quickSearch(document.location.search.replace("?q=",""));
});