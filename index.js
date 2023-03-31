// linking the picture of LEFT dice displayed to the corresponding random number
var randomNumber1   = Math.floor(Math.random () * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var image1          = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1);

// linking the picture of RIGHT dice displayed to the corresponding random number
var randomNumber2 = Math.floor(Math.random () * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

// displaying the winner :

    //  if player 1 wins
if (randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML = "&#127882; Player 1 wins &#127882;"
    }

    // if player 2 wins
if (randomNumber2 > randomNumber1)
    {
        document.querySelector("h1").innerHTML = "&#127882; Player 2 wins &#127882;"
    }

    // if it is a draw
if (randomNumber1 === randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Draw!"
    }