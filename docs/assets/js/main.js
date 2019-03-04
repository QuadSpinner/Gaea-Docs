// Auto update layout
if (window.layoutHelpers) {
  window.layoutHelpers.setAutoUpdate(true);
}

$(function () {
  // Initialize sidenav
  $('#layout-sidenav').each(function () {
    new SideNav(this, {
      orientation: $(this).hasClass('sidenav-horizontal') ? 'horizontal' : 'vertical'
    });
  });

  // Initialize sidenav togglers
  $('body').on('click', '.layout-sidenav-toggle', function (e) {
    e.preventDefault();
    window.layoutHelpers.toggleCollapsed();
  });

  // Swap dropdown menus in RTL mode
  if ($('html').attr('dir') === 'rtl') {
    $('#layout-navbar .dropdown-menu').toggleClass('dropdown-menu-right');
  }

});

function changeStyle() {
  if (Cookies.get('style') == "dark") {
    document.getElementById('cssx').href = "/assets/custom/dark.css";
    $("#cb1").prop("checked", true);
  } else {
    document.getElementById('cssx').href = "/";
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


