import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';


import ImageSpider from './img/spiderman.jpg'
import ImageHulk from './img/hulk.jpg'


renderSpidermanImage(ImageSpider);
renderHulkImage(ImageHulk);
renderTitle();

const form = document.getElementById('form');
const lines = document.getElementById('lines');
const col = document.getElementById('col');
const string = document.getElementById('string');

const tableWrapper = document.getElementById('tableElements');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    /* .value permet d acceder a la valeur de l input */
    const expectedArray = createArray(lines.value, col.value, string.value);
    const expectedHtmlTableAsString = createHtmlTableAsString(expectedArray);
    tableWrapper.innerHTML = expectedHtmlTableAsString;
  });


function createArray(lineCount = 1, columnCount = 1, startString = 'Cell') {
    const expectedArray = [];
    for (let x = 0; x < lineCount; x += 1) {
      expectedArray.push([]);
      for (let y = 0; y < columnCount; y += 1) {
        expectedArray[x].push(`${startString}[${x}][${y}]`);
      }
    }
    return expectedArray;
  }

  function createHtmlTableAsString(expectedArray) {
    /* Neat way to loop through all data in the array, create a new array of string elements
    (HTML tr/td tags) with map(), and create one string from the resulting array with join('').
    '' means that the separator is a void string. */


  
    const htmlTableLinesAsString = expectedArray.map((line) => `<tr>${line.map((column) => `<td>${column}</td>`).join('')}</tr>`)
      .join('');
  
    const htmlTableAsString = `<table class="table table-bordered text-nowrap">
                            ${htmlTableLinesAsString}
                        </table>`;
  
    return htmlTableAsString;
  }

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


