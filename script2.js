console.log('Lots of Java; lots of script.');

function gameAttack(){
  for (i = 0; i < 20; i++){
    var colAttack = Math.floor(Math.random() * 20);
    var rowAttack = Math.floor(Math.random() * 10);
    var condit = 'guessed';
    theApp.attackCoordSets.push([rowAttack, colAttack, condit]);
    }
    computerDestroys();
  }

function renderQuestion(){
  var questions = {
    {
      question: "What is ten times 300?",
      answer: 3000
  }
}

function renderAttackButton(){
  console.log("In renderAttackButton Function");

  var attackDiv = document.querySelector("#attack-button");
  var attackLaunch = document.createElement("button");
  attackLaunch.innerText = "Attack Field!";

  attackLaunch.addEventListener('click', gameAttack);
  attackDiv.appendChild(attackLaunch);
}

function computerDestroys(){
  var picked = theApp.pickedCoordSet;
  var guessed = theApp.attackCoordSets;
  var allThings = board.allCoordSets;
  var changeMe = document.querySelectorAll(".assignedAsset");

  // console.log("This is the Pre-loop Picked stuff: " + picked[3][0] + "," + picked[3][1]);
  // console.log("These are the Pre-loop Guessed things: " + guessed[3][0] + "," + guessed[3][1]);

  for (i = 0; i < guessed.length; i++){
    // console.log('guess in loop: ' + guessed[i][0] + ', '+ guessed[i][1]);
    // console.log('guess set:' + i);

    for (j = 0; j < picked.length; j++){
      // console.log('picked in loop: ' + picked[j][0]  + ', '+ picked[j][1]);

      if((guessed[i][0] === picked[j][0]) && (guessed[i][1] === picked[j][1])){
        changeMe[j].innerText = 'HIT';
        console.log("A matched HIT happened");
      } else {
        console.log("No match yet..");
      }
      };
      console.log("click number: " + i);
    };
    aThing = changeMe[3].dataset.row;
    // console.log("This is A THING: " + aThing);
    // console.log("This is the Change Me stuff: " + changeMe[0].dataset.row + "," + changeMe[0].dataset.col);
    // console.log("This is the Picked stuff: " + picked[3][0] + "," + picked[3][1]);
    // console.log("These are the Guessed things: " + guessed[3][0] + "," + guessed[3][1]);

    return theApp.pickedCoordSet;
    return theApp.assetCurrent;
  }




function listenEvent(){
  var box = document.querySelector('.board');
  box.addEventListener('click', selected);
}


function stopListen(){
  if(theApp.assetCurrent == 0){
    var box = document.querySelector('.board');
  box.removeEventListener('click', selected);
  var box = document.querySelector('.board');
    box.removeEventListener('click', selected);
    document.querySelector('#assetTitle').innerHTML = 'Assets Left:';
    document.querySelector('#assetCount').innerHTML = 2000;

    renderAttackButton();
  }
}


function selected(event) {
  if(!event.target.classList.contains('assignedAsset')){
    event.target.classList.add('assignedAsset');
    event.target.dataset.state = 'picked';
    event.target.dataset.condit = 'none';
    event.target.innerText = '100';
    theApp.pickedCoordSet.push([parseInt(event.target.dataset.row), parseInt(event.target.dataset.col), 'picked']);
    theApp.assetCurrent -= 100;
    document.querySelector('#assetCount').innerHTML = theApp.assetCurrent;
  }
  stopListen();
}


function renderRow(rowIdx) {
  var rowEl = document.createElement('div');
  rowEl.classList.add('row');
  for (var i = 0; i < 20; i++) {
    var box = document.createElement('div');

    box.classList.add('box');
    box.dataset.row = rowIdx;
    box.dataset.col = i;
    box.dataset.state = 'empty';
    box.dataset.condit = 'none';
    var rowAssign = rowIdx;
    var colAssign = i;
    var state = 'empty';
    var condit = 'none';
    board.allCoordSets.push([rowAssign, colAssign, state]);

    rowEl.appendChild(box);
  }
  return rowEl;
}


function renderBoard(gridData) {
  var newElement = document.createElement('div');
  newElement.classList.add('board');
  for (var i = 0; i < 10; i++) {
    var newRow = this.renderRow(i);
    this.gridData = gridData;
    newElement.appendChild(newRow);
  }
  return newElement;
}

function render() {
  var boardEl = document.querySelector('.board-holder');
  boardEl.innerHTML = '';

  boardContent = this.renderBoard();
  boardEl.appendChild(boardContent);
}

var board = {
  // selected: selected,
  render: render,
  renderBoard: renderBoard,
  renderRow: renderRow,
  listenEvent: listenEvent,
  allCoordSets: []
  // countDown: countDown;
};

var theApp = {
  assetCurrent: 2000,
  gameAttack: gameAttack,
  pickedCoordSet: [],
  attackCoordSets: []
};

board.render();
board.listenEvent();

console.log(theApp.pickedCoordSet);
console.log(theApp.attackCoordSets);
