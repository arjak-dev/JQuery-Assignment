$(document).ready(function(){
    $(".header").click(function(){
        $(".header").css("background","red");
    })
    $(".sidebar").click(function(){
        $(".sidebar").text("Hello World!")
    })
    $(".Extra").click(function(){
        $(".main").fadeOut();
    })
})