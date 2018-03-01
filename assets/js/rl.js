$(document).ready(function(){
  var content = $('#banner');
  var cur_width = content.innerWidth();
  var img_width = 960;
  var img_height = 557;
  var cur_height = cur_width * ( img_height / img_width );
  $('#banner').height(cur_height);

  // disable the entry area until the form works
  $("input, textarea").attr("disabled", "disabled");
});

$( window ).resize(function() {
  var content = $('#banner');
  var cur_width = content.innerWidth();
  var img_width = 960;
  var img_height = 557;
  var cur_height = cur_width * ( img_height / img_width );
  $('#banner').height(cur_height);
});
