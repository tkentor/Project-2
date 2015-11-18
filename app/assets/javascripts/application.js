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
//= require_tree .

$(document).ready(function(){


$('.plus').click(function() {
  img = $(this).siblings().eq(1)
    if(img.css('width') == '100px'){
      img.css('width', '150px')
      img.css('margin', '75px');
    } else if(img.css('width') == '150px'){
        img.css('width', '200px')
        img.css('margin', '50px');
    } else if(img.css('width') == '200px'){
      img.css('width', '250px')
      img.css('margin', '25px');
    } else{
      img.css('width', '300px')
      img.css('margin', '0px')
    }
  })


$('.minus').click(function() {
  img = $(this).siblings().eq(0)
    if(img.css('width') == '300px'){
      img.css('width', '250px')
      img.css('margin', '25px');
    } else if(img.css('width') == '250px'){
        img.css('width', '200px')
        img.css('margin', '50px');
    } else if(img.css('width') == '200px'){
      img.css('width', '150px')
      img.css('margin', '75px');
    } else{
      img.css('width', '100px')
      img.css('margin', '100px')
    }
  })

});
