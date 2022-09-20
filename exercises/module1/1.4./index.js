
const circles= document.querySelectorAll('.circle');

let activateLight =0;

setInterval(changeLight, 2000);

function changeLight(){
    circles[activateLight].className = 'circle'
    activateLight++;

    if(activateLight>2){
        activateLight =0;
    }

    const curentLight = circles[activateLight];

    curentLight.classList.add(curentLight.getAttribute('color'))
}




