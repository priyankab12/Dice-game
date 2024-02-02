//simply in this code we have changed the value of inner html and 
//image src attribute
var rand1=Math.random();
rand1=rand1*6;
rand1=Math.floor(rand1)+1;

var rand2=Math.random();
rand2=rand2*6;
rand2=Math.floor(rand2)+1;

document.querySelector(".img1").setAttribute("src","/dicegame/images/"+"dice"+rand1+".png");

document.querySelector(".img2").setAttribute("src","/dicegame/images/"+"dice"+rand2+".png");

if(rand1<rand2)
{
    document.querySelector(".h11").innerHTML="Player 2won 🚩"
}
else if(rand1>rand2)
{
    document.querySelector(".h11").innerHTML="Player 1won 🚩"
}



