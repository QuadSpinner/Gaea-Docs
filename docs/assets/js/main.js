// Auto update layout
if (window.layoutHelpers) {
  window.layoutHelpers.setAutoUpdate(true);
}

function changeStyle() {
  if (Cookies.get('style') == "dark") {
    document.getElementById('cssx').href = "/assets/custom/dark.css";
    $("#logo").prop("src", "/images/Gaea_Logo_LightAlt.png");
    $("#cb1").prop("checked", true);
  } else {
    document.getElementById('cssx').href = "/";
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

  $("#small-nav-dropdown").change(function(){
    if ($(this).val()!='') {
      window.location.href=$(this).val();
    }
  });
});

changeStyle();


