console.log('Lots of Java; lots of script.');

// function print() {
//   board.render();
//   console.log('Mo Java; mo script.');
// }

// var assStart = 1000;
// var assetCurrent = selected();

// function countDown() {
//   var box = document.querySelector('.board');
//   if(assStart <= 0){

//     box.removeEventListener('click', selected);
//   }
//   // var assCounter = document.querySelector('#assetCount');
//   // var assNum = assStart - 100;
//   // assCounter.innerHTML = assNum;
//   // document.querySelector('#assetCount').innerHTML = assStart - 100;
// }



function gameAttack(){
  // var allCellCoord = [];
  // var cell = document.querySelectorAll('.box');
  // if($("div:not([data-state='guessed'])")){
  // var cell = document.querySelectorAll('.box');
  for (i = 0; i < 25; i++){
  //   rowNumHr = $(cell).data( "row" );

    var colAttack = Math.floor(Math.random() * 20);
    var rowAttack = Math.floor(Math.random() * 10);
    // var state = 'empty';
    var condit = 'guessed';
    // if(cell.row === rowAttack && cell.col === colAttack){
    //   cell.classList.add('hit');
    //   cell.classList.remove('assignedAsset');
    // }

    theApp.attackCoordSets.push([rowAttack, colAttack, condit]);
    }
    // cell.classList.add('hit');
    computerDestroys();
  }
  // console.log(theApp.attackCoordSets);
  // console.log(rowNumHr);

  // return theApp.attackCoordSets;


function computerDestroys(){
  var picked = theApp.pickedCoordSet;
  var guessed = theApp.attackCoordSets;
  var allThings = board.allCoordSets;
  var changeMe = document.querySelectorAll('.assignedAsset');

  for (i = 0; i < guessed.length; i++){
    console.log('guess' + guessed[i][0]);
    console.log('thing' + allThings[i][0]);
    console.log('picked' + changeMe[i]);
    if(guessed[i][0] === allThings[i][0]){
      if(guessed[i][1] === allThings[i][1]){

        }

       // changeMe.innerHTML = 'see?';
    }

    aThing = changeMe[0].dataset.row;
  // changeMe = document.querySelectorAll(`[data-row=""]`);
   // && guessed[i][1] === allThings[i][1]

    changeMe[3].innerText = 'HIT';
    // changeMe[i].innerText = 'see?';
  // console.log(changeMe);

  // x = document.querySelectorAll('[data-col="2"]')
  // coord = [5, 7]
  // document.querySelectorAll(`[data-row="${coord[0]}"]`)[7]
  // document.querySelectorAll(`[data-row="${coord[0]}"]`)[coord[1]]
  // for (i = 0; i < guessed.length; i++){
  //   if (guessed[0][1] === picked[0][1]){

  }
  console.log(aThing);
  console.log(changeMe);
  console.log(picked);
  // console.log(guessed.length);
  console.log(guessed);
  // console.log(allThings);
}
  // if (picked.dataset.state === 'picked') {
  // console.log('this is picked:', picked);


  // var guessed = document.querySelectorAll('[data-condit= guessed]');
  // console.log('this is guessed:', guessed);
  // if(picked && guessed){
  //   picked.classList.add('hit');
  //   picked.classList.remove('assignedAsset');
// console.log(theTarget);


function listenEvent(){
  // if (!parseInt(document.querySelector('#assetCount').innerHTML) === 0){
  var box = document.querySelector('.board');
  box.addEventListener('click', selected);
}
// }

function stopListen(){
  if(theApp.assetCurrent == 0){
    var box = document.querySelector('.board');
  box.removeEventListener('click', selected);
  var box = document.querySelector('.board');
    box.removeEventListener('click', selected);
    document.querySelector('#assetTitle').innerHTML = 'Assets Left:';
    document.querySelector('#assetCount').innerHTML = 1000;
    gameAttack();
  }

}

function selected(event) {
  if(!event.target.classList.contains('assignedAsset')){
    event.target.classList.add('assignedAsset');
    // event.target.classList.remove('empty');
    event.target.dataset.state = 'picked';
    event.target.dataset.condit = 'none';
    // event.target.dataset.state = 'picked';
    event.target.innerText = '100';
    theApp.pickedCoordSet.push([parseInt(event.target.dataset.row), parseInt(event.target.dataset.col), 'picked']);
    theApp.assetCurrent -= 100;
    document.querySelector('#assetCount').innerHTML = theApp.assetCurrent;
    // computerDestroys();
  }
  // return classNum;
  stopListen();
  // console.log(theApp.pickedCoordSet);
  return theApp.pickedCoordSet;
  return theApp.assetCurrent;
}



// function classCount(){
// var classNum = document.querySelectorAll('.board .assignedAsset').length;
// console.log(classNum);
// }
// console.log(selected());

// function stopSetup(){
//   if(theApp.assetCurrent <= 0){
//     var box = document.querySelector('.board');
//     box.removeEventListener('click', selected);
//   }
// }


function renderRow(rowIdx) {
  var rowEl = document.createElement('div');
  rowEl.classList.add('row');
  for (var i = 0; i < 20; i++) {
    var box = document.createElement('div');

    // var row = Math.floor(rowIdx);
    // var col = rowIdx;

    // var boxVal = this.gridData[row][col];
    // var boxShow = genCellDisplayClass(boxVal);

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
    // this.pushRow(rowIdx);
    // this.pushCol(i);
    // box.addEventListener('click', selected);

    rowEl.appendChild(box);
    // console.log(row);
    // console.log(col);
  }
  return rowEl;
  // return box;
  // console.log(box);
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

// var plyrSelects = document.querySelectorAll('board-holder');

// for(i = 0; i < plyrSelects.length; i++) {
  // plyrSelects[i].addEventListener('click', selected);
// }

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
  assetCurrent: 1000,
  gameAttack: gameAttack,
  pickedCoordSet: [],
  attackCoordSets: []
  // stopSetup: stopSetup
  // classCount: classCount
};
// var think = {
//   row: [],
//   col: [],
//   pushRow: pushRow(val),
//   pushCol: pushCol(val)
//   // pushRow: pushRow(val) {this.row.push(val)},
//   // pushCol: pushCol(val) {this.col.push(val)}
// };

// print();

board.render();
board.listenEvent();
// theApp.gameAttack();
// console.log(board.allCoordSets);
console.log(theApp.pickedCoordSet);
console.log(theApp.attackCoordSets);
// theApp.classCount();
// theApp.stopSetup();
// board.countDown();
