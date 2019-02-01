// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.




function changeStyle() {
    if (Cookies.get('style') == "dark") {
        document.getElementById('cssx').href = "/styles/docfx.dark.css";
    } else {
        document.getElementById('cssx').href = "/styles/docfx.light.css";
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

$(document).ready(function(){       
    $('#cb1').on('click', function () { setStyle(); });
});

changeStyle();