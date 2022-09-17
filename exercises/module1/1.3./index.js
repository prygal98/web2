let add = document.getElementById('increment')
let message = document.getElementById('message')

let int  = document.getElementById('number')

let integer = 0;

add.addEventListener('click', function(){
    
    integer++;
    int.innerHTML = integer;
    if(integer >= 5 && integer<10){
        message.innerHTML = "« Bravo, bel échauffement ! »"
    }

    if(integer >= 9 ){
        message.innerHTML = "« Vous êtes passé maître en l'art du clic ! »"
    }
})