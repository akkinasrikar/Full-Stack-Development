<<<<<<< HEAD
var no_of_buttons = document.querySelectorAll(".drum").length;

for(var i = 0; i < no_of_buttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress",function(event){ 
    makesound(event.key);
    buttonAnimation(event.key);
});

function handleClick() {
    alert("Clicked");
}

function soundplay(path){
    var audio = new Audio(path);
    audio.play();
}

function makesound(a){
    switch (a) {
        case "w":
            soundplay("sounds/tom-1.mp3");
            break;
        case "a":
            soundplay("sounds/tom-2.mp3");
            break;
        case "s":
            soundplay("sounds/tom-3.mp3");
            break;
        case "d":
            soundplay("sounds/tom-4.mp3");
            break;
        case "j":
            soundplay("sounds/snare.mp3");
            break;
        case "k":
            soundplay("sounds/crash.mp3");
            break;
        case "l":
            soundplay("sounds/kick-bass.mp3");
            break;
        default:
            console.log(this.innerHTML);
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
=======
var no_of_buttons = document.querySelectorAll(".drum").length;

for(var i = 0; i < no_of_buttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress",function(event){ 
    makesound(event.key);
    buttonAnimation(event.key);
});

function handleClick() {
    alert("Clicked");
}

function soundplay(path){
    var audio = new Audio(path);
    audio.play();
}

function makesound(a){
    switch (a) {
        case "w":
            soundplay("sounds/tom-1.mp3");
            break;
        case "a":
            soundplay("sounds/tom-2.mp3");
            break;
        case "s":
            soundplay("sounds/tom-3.mp3");
            break;
        case "d":
            soundplay("sounds/tom-4.mp3");
            break;
        case "j":
            soundplay("sounds/snare.mp3");
            break;
        case "k":
            soundplay("sounds/crash.mp3");
            break;
        case "l":
            soundplay("sounds/kick-bass.mp3");
            break;
        default:
            console.log(this.innerHTML);
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
>>>>>>> 43b1900cceaf826cfb03965603e438fc6e6152d3
}