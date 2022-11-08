<<<<<<< HEAD
var colors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;






function playsound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver(){
    level=0;
    gamePattern=[];
    started = false;
=======
var colors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;






function playsound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver(){
    level=0;
    gamePattern=[];
    started = false;
>>>>>>> 43b1900cceaf826cfb03965603e438fc6e6152d3
}