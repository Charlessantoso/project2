var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImg1 = "images/dice" + randomNumber1 + ".png";
var randomImg2 = "images/dice" + randomNumber2 + ".png";


var img1 = document.getElementsByClassName("img1")[0].setAttribute("src", randomImg1);
var img2 = document.getElementsByClassName("img2")[0].setAttribute("src", randomImg2);

//validation

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else{
    document.querySelector("h1").innerHTML = "Draw!";
}