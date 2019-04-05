
const SuperContainer = document.getElementById('root');
const Grid = document.createElement('div');
Grid.classList.add('mainGrid');

SuperContainer.appendChild(Grid);

function createGrid(num) {
  let mySquare = document.createElement('div');
  mySquare.classList.add('mySquare');
  Grid.appendChild(mySquare);
}

for (let i = 0; i < 256; i++) {
  createGrid(16)
}

function coloringSquare() {
  let drawing = document.querySelectorAll(".mySquare");
  drawing.forEach((div) => {
      div.addEventListener('mouseover', function(e) {
          e.target.setAttribute('style', `background-color: ${randomColors()};`);
      });
  });
}

coloringSquare();

function randomColors() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return (`rgb( ${red}, ${green}, ${blue});`);
}