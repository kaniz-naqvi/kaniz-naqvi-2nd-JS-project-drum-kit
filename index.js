var buttons = document.querySelectorAll(".drum").length;

for(let i = 0; i < buttons; i++){
    document.querySelectorAll("button")[i].addEventListener('click', playSound);
}
//For click detection
function playSound(){
    var buttonInnerHtml= this.innerHTML;
   makeSound(buttonInnerHtml);
   addAnimation(buttonInnerHtml);
}
//For Keydown detection
document.addEventListener('keydown', playSound2);
function playSound2(event){
    makeSound(event.key);
    addAnimation(event.key);
}
//Switching between the kyes and buttons
function makeSound(key){
switch(key){
    case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "l":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
     case "k":
        var kickBass=new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
    case "j":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
    default:
        console.log(key);
}
}
//adding animations to the button
function addAnimation(detectTheButton){
    let activeButton=document.querySelector("."+detectTheButton);
    activeButton.classList.add("pressed");

    setTimeout(inactiveButton, 100);
    function inactiveButton(){
        activeButton.classList.remove("pressed");
    }
}