// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

//
//     $('#mindfulness-img').click(function() {
//     $('#mindfulness-img').css({
//         'width': '350px'
//     });
// });
//
//
// });


$('#plus').click(function() {
    if($('#mindfulness-img').css('width') == '100px') {
        $('#mindfulness-img').css({
          'width': '150px'});
    } else if($('#mindfulness-img').css(
      'width') == '150px') {
        $('#mindfulness-img').css({
            'width': '200px'});
    } else if($('#mindfulness-img').css(
      'width') == '200px') {
        $('#mindfulness-img').css({
            'width': '250px'});
    } else {
        $('#mindfulness-img').css({'width':'300px'});
    }
});

$('#minus').click(function() {
    if($('#mindfulness-img').css('width') == '300px') {
        $('#mindfulness-img').css({
          'width': '250px'});
    } else if($('#mindfulness-img').css(
      'width') == '250px') {
        $('#mindfulness-img').css({
            'width': '200px'});
    } else if($('#mindfulness-img').css(
      'width') == '200px') {
        $('#mindfulness-img').css({
            'width': '150px'});
    } else {
        $('#mindfulness-img').css({'width':'100px'});
    }
});



});
