// Main div element of our App with the ID root.
const SuperContainer = document.getElementById('root');

// BUTTON RESET SETUP
const ButtonReset = document.createElement('button');
ButtonReset.setAttribute('id', 'ButtonReset');
ButtonReset.textContent = 'Reset';
ButtonReset.addEventListener('click', function() {
  removeGrid();
  createGrid();
  coloringSquare();
})
SuperContainer.appendChild(ButtonReset);

<<<<<<< HEAD
// Our main grid element appended to the ID root
=======
>>>>>>> 21e6d681627c7d99150ae00a83e4be0ed7ed7d66
const Grid = document.createElement('div');
Grid.classList.add('mainGrid');
SuperContainer.appendChild(Grid);


function createGrid() {
  for (let i = 0; i < 256; i++) {
    let mySquare = document.createElement('div');
    mySquare.classList.add('mySquare');
    Grid.appendChild(mySquare);
  }
  Grid.classList.add('mainGrid');
}
createGrid();


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
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return (`rgb(${red}, ${green}, ${blue});`);
}


function removeGrid() {
  var gridBox = document.querySelectorAll(".mySquare");
  gridBox.forEach((div) => {
      div.parentNode.removeChild(div);
  });
}