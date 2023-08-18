var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var  randomImageSource1 = "Images/dice"+randomNumber1+".png"; // Images/dice01.png-dice06.png
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1 );

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "Images/dice"+randomNumber2+".png";  // Images/dice01.png-dice06.png
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2 );

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
    document.querySelector("footer").innerText = "🎲 Ali Akbar 🎲 "
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
    document.querySelector("footer").innerText = "🎲  Ali Asgar 🎲 "
}
else {
    document.querySelector("h1").innerHTML = " Draw!";
    document.querySelector("footer").innerText = "🎲 No Players Win  🎲"
}



