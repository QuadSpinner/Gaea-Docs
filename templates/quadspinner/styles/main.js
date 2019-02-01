// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.

function changeStyle() {
    if (Cookies.get('style') == "dark") {
        document.getElementById('cssx').href = "/styles/docfx.dark.css";
        $("#cb1").prop("checked", true);
    } else {
        document.getElementById('cssx').href = "/styles/docfx.light.css";
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
});

changeStyle();