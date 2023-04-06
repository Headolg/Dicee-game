// deno-lint-ignore-file
var randomNumber1 = Math.floor(Math.random() * 6) +1;
var img1Source = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2Source = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", img1Source);
document.querySelector(".img2").setAttribute("src", img2Source);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent= "Player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
    document.querySelector("h1").textContent ="Draw!";
}