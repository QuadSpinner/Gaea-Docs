
// Search
$(function() {
  $('.navbar-search-input > input').on('focus', function() {
    $('.navbar-search-box').addClass('active');
  });
  $('.navbar-search-cancel').on('click', function(e) {
    e.preventDefault();
    $('.navbar-search-box').removeClass('active');
  });
});
