var randomNo1 = Math.floor(Math.random()*6) + 1;
var randomNo1Img = "Images/dice" + randomNo1 + ".png";
document.querySelector("#dice1 img").setAttribute("src", randomNo1Img);


var randomNo2 = Math.floor(Math.random()*6) + 1;
var randomNo2Img = "Images/dice" + randomNo2 + ".png";
document.querySelector("#dice2 img").setAttribute("src", randomNo2Img);

if(randomNo1>randomNo2)
{
document.querySelector(".result").innerHTML = "🎉PLAYER 1 WINS!";
}
else if(randomNo1<randomNo2)
{
    document.querySelector(".result").innerHTML = "PLAYER 2 WINS!🎉";
}
else
{
    document.querySelector(".result").innerHTML = "DRAW!";
}


function reset()
{
   var resultP =  document.querySelector(".result");
   resultP.innerHTML = "Let's 🎲 Begin";
   resultP.style.backgroundColor = "black";
   resultP.style.color  = "cornflowerblue"
 
}

/*
const P1dice = document.querySelector("#dice1 img");
const P2dice = document.querySelector("#dice2 img");

if(r1>r2)
{
document.querySelector(".result").innerHTML = "🎉PLAYER 1 WINS!";
//document.querySelector("#dice1").style.backgroundColor = "Grey";
//document.querySelector("#dice1").style.borderRadius = "10%";

}
else if(r1<r2)
{
    document.querySelector(".result").innerHTML = "🎉PLAYER 2 WINS!";
}
else
{
    document.querySelector(".result").innerHTML = "😶DRAW!";
}

if(r1 === 1 )
    {
        P1dice.setAttribute("src", "Images/dice1.png");
    }
else if(r1 === 2 )
    {
        P1dice.setAttribute("src", "Images/dice2.png");
    }
else if(r1 === 3 )
    {
        P1dice.setAttribute("src", "Images/dice3.png");
    }
else if(r1 === 4 )
    {
        P1dice.setAttribute("src", "Images/dice4.png");
    }
else if(r1 === 5)
    {
        P1dice.setAttribute("src", "Images/dice5.png");
    }
else
    {
        P1dice.setAttribute("src", "Images/dice6.png");
    }


    if(r2 === 1 )
    {
        P2dice.setAttribute("src", "Images/dice1.png");
    }
else if(r2 === 2 )
    {
        P2dice.setAttribute("src", "Images/dice2.png");
    }
else if(r2 === 3 )
    {
        P2dice.setAttribute("src", "Images/dice3.png");
    }
else if(r2 === 4 )
    {
        P2dice.setAttribute("src", "Images/dice4.png");
    }
else if(r2 === 5)
    {
        P2dice.setAttribute("src", "Images/dice5.png");
    }
else
    {
        P2dice.setAttribute("src", "Images/dice6.png");
    }


    function reset()
    {
       var resultP =  document.querySelector(".result");
       resultP.innerHTML = "LET's BEGIN";
       resultP.style.backgroundColor = "none";
    }*/
