// ORIGINAL
function listenEvent(){
  var box = document.querySelector('.board');
  box.addEventListener('click', selected);
}

// NEW
function listenEvent(){
  if (document.querySelector('#assetCount').innerHTML >= 1){
  var box = document.querySelector('.board');
  box.addEventListener('click', selected);
  }
}  

function stopListen(){
  if 
}

var assetCurrent = parseInt(document.querySelector('#assetCount').innerHTML);

`[data-row="${row}" data-col="${col}"]`
"[data-row="4" data-col="5"]"


grid = [['empty', 'empty', 'assigned'], ['assigned', 'missed', 'missed'], ['hit', 'empty', 'missed']]

(3) [Array(3), Array(3), Array(3)]

0: "empty" 
1: "empty" 
2: "assigned"
length: 3__proto__: 

Array(0)
0: (3) ["empty", "empty", "assigned"]
1: (3) ["assigned", "missed", "missed"]
2: (3) ["hit", "empty", "missed"]
length: 3__proto__: Array(0)

guesses = [[0, 1], [0, 2]]
(2) [Array(2), Array(2)]

0: (2) [0, 1]
1: (2) [0, 2]
length: 2__proto__: 

Array(0)

firstGuess = guesses[0]
(2) [0, 1]
                    
grid[firstGuess[0]][firstGuess[1]]
                    
"empty"



// coordinateX = document.element.dataset.row;
  // coordinateY = document.element.dataset.col;
  // var r = cell.dataset.row;
  // var c = cell.dataset.col;
  // var victim = [r,c];

  
x = document.querySelectorAll('[data-col="2"]')
coord = [5, 7]
document.querySelectorAll(`[data-row="${coord[0]}"]`)[7]
document.querySelectorAll(`[data-row="${coord[0]}"]`)[coord[1]]

function gameAttack(){
  // var allCellCoord = [];
  var cellRow = 2;
  var cellCol = 4;
  var theBox = document.querySelector('[data-row=cellRow]', '[data-col=cellCol]');


  document.querySelectorAll('.box');
  if($("div:not([data-state='guessed'])")){
  for (i = 0; i < 10; i++){
    var colAttack = Math.floor(Math.random() * 20);
    var rowAttack = Math.floor(Math.random() * 10);
    // var state = 'empty';
    var condit = 'guessed';
    theApp.attackCoordSets.push([rowAttack, colAttack, condit]);
    // cell.classList.add('hit');
    }
  }
  console.log(theApp.attackCoordSets);
  computerDestroys();
  return theApp.attackCoordSets;
}

