
var red = document.getElementById("red")
var orange = document.getElementById("orange")
var green = document.getElementById("green")


let i = 0;



function change (){
    let colors = ["red","white"]
    
    red.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
}

function change2 (){
    let colors = ["orange","white"]
    
    orange.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
}

function change3 (){
    let colors = ["green","white"]
    
    green.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
}


setInterval(change, 2000);
setInterval(change2, 2000);
setInterval(change3, 2000);