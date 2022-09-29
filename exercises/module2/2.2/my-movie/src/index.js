import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';


import ImageSpider from './img/spiderman.jpg'
import ImageHulk from './img/hulk.jpg'


renderSpidermanImage(ImageSpider);
renderHulkImage(ImageHulk);
renderTitle();

function renderSpidermanImage(spiderURL){
const image = new Image();
image.src = spiderURL;
image.height = 300;
const div = document.getElementById('spiderman');
div.appendChild(image);

}

function renderHulkImage(hulkURL){
    const image = new Image();
    image.src = hulkURL;
    image.height = 300
    const div = document.getElementById('hulk');
    div.appendChild(image);
}

function renderTitle(){
    const title = document.getElementById('title');
    title.innerText = 'The new social network for movie lover'
}