<<<<<<< HEAD
var number1 = Math.floor(Math.random() * 6) + 1;
var number2 = Math.floor(Math.random() * 6) + 1;

var rimage1 = "images/dice"+number1+".png";
var rimage2 = "images/dice"+number2+".png";


var image1 = document.querySelectorAll("img")[0]
var image2 = document.querySelectorAll("img")[1]

image1.setAttribute("src",rimage1);
image2.setAttribute("src",rimage2);

if(number1 > number2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(number1 < number2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
=======
var number1 = Math.floor(Math.random() * 6) + 1;
var number2 = Math.floor(Math.random() * 6) + 1;

var rimage1 = "images/dice"+number1+".png";
var rimage2 = "images/dice"+number2+".png";


var image1 = document.querySelectorAll("img")[0]
var image2 = document.querySelectorAll("img")[1]

image1.setAttribute("src",rimage1);
image2.setAttribute("src",rimage2);

if(number1 > number2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(number1 < number2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
>>>>>>> 43b1900cceaf826cfb03965603e438fc6e6152d3
}