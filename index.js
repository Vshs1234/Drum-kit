// detecting button press 
for (var i=0;i<=document.querySelectorAll(".drum").length;i=i+1){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
       sound(this.innerHTML) ;
       animation(this.innerHTML);
    });
}
// detecting keyboard press 
document.addEventListener("keypress",function (event) {
    sound(event.key);
    animation(event.key);
});


function sound(key){
    switch (key) {
        case "w":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            break;
    }
}
function animation(val){
    document.querySelector("."+val).classList.add("pressed");
    setTimeout(function (){document.querySelector("."+val).classList.remove("pressed")},600);

}