<<<<<<< HEAD
/* $("h1").css("color", "red"); */
$("h1").addClass("title font-title");
$("button").addClass("btn btn-primary");

$("h1").click(function() {
    $("h1").css("color", "green");
})

$("button").click(function(){
    $("h1").css("color", "Black");
})  

/* $(document).keypress(function(event){
    $("h1").text(event.key);
}); */

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
=======
/* $("h1").css("color", "red"); */
$("h1").addClass("title font-title");
$("button").addClass("btn btn-primary");

$("h1").click(function() {
    $("h1").css("color", "green");
})

$("button").click(function(){
    $("h1").css("color", "Black");
})  

/* $(document).keypress(function(event){
    $("h1").text(event.key);
}); */

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
>>>>>>> 43b1900cceaf826cfb03965603e438fc6e6152d3
})