$(document).ready(function () {

    $(".Footer").click(function(){
          $(".popup").show();
          $(".cross").show();
      })
    $(".cross").click(function(){
      $(".popup").hide();
    })
});