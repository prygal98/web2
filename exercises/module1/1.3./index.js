let add = document.getElementById('increment')
let addd = document.querySelector("body");
let message = document.getElementById('message')
let momo = document.getElementById('button1')
let int  = document.getElementById('number')

let integer = 0;

addd.addEventListener('click', function(){
    
    integer++;
    int.innerHTML = integer;
    if(integer >= 5 && integer<10){
        message.innerHTML = "« Bravo, bel échauffement ! »"
    }

    if(integer >= 9 ){
        message.innerHTML = "« Vous êtes passé maître en l'art du clic ! »"
    }
})


function mouseOver(){
    document.getElementById('button1').style.color = "green";
    document.getElementById('button1').style.display = "inline";
    document.getElementById('momo').style.visibility = "visible";
}
function mouseOut(){
    document.getElementById('button1').style.color = "red";
    document.getElementById('momo').style.visibility = "hidden";
}
document.getElementById('button1').onmouseover = mouseOver;
document.getElementById('button1').onmouseout = mouseOut;
