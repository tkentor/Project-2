$(document).ready(function(){
  console.log("working")

  var delay = null;

    $(".time").change(function(){
      delay = parseFloat($(this).val() ) * 60;
      clearInterval(delay);
      console.log("New Interval: " + delay);
      }
    )

    $("#start").click(function() {
      timeout = setTimeout(function() {
        alert('Finished');
      }, delay)
    })


        // $("#stop").click(function() {
        //       if (timeout) {
        //           clearTimeout(timeout);
        //           timeout = null;
        //       }
        //       alert('Stopped');
        //   })



    })
