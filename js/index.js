var userArr = [[0,0,0],[0,0,0],[0,0,0]];
var aiArr = [[0,0,0],[0,0,0],[0,0,0]];
var gameArr = [[0,0,0],[0,0,0],[0,0,0]];
var clicked = 0;
var gameMode = 0;
var userSymbol = "";
var aiSymbol = "";
var game;

// to nie smiga, zrobic
function gameArrView(arr,sym){
  var ans = [[],[],[]];
  //console.log("W FUNKCJI");
  console.log(arr);
  console.log(sym);
  
  for(var i = 0; i < arr.length ; i++){
    for(var j = 0 ; j < arr[i].length ;j++){
      if(arr[i][j] == sym){
        ans[i][j] = 1;
      }
      else{
        ans[i][j] = 0;
      }
    }
  }

  return ans;
}

 

function add(a, b) {
    return a + b;
}

function isFieldFull(arr1,arr2){
  var sum = 0;
  sum += arr1.reduce(add, 0);
  sum += arr2.reduce(add, 0);
  if(sum == 9){
    return true;
  }
  else{
    return false;
  }
}

function winCheck(arr){
  if(arr[0][0] === 1 & arr[0][1] === 1 & arr [0][2] === 1){
    return true;
  }
  if(arr[1][0] === 1 & arr[1][1] === 1 & arr [1][2] === 1){
    return true;
  }
  if(arr[2][0] === 1 & arr[2][1] === 1 & arr [2][2] === 1){
    return true;
  }
  if(arr[0][0] === 1 & arr[1][0] === 1 & arr [2][0] === 1){
    return true;
  }
  if(arr[0][1] === 1 & arr[1][1] === 1 & arr [2][1] === 1){
    return true;
  }
  if(arr[0][2] === 1 & arr[1][2] === 1 & arr [2][2] === 1){
    return true;
  }
  if(arr[0][0] === 1 & arr[1][1] === 1 & arr [2][2] === 1){
    return true;
  }
  if(arr[0][2] === 1 & arr[1][1] === 1 & arr [2][0] === 1){
    return true;
  }
  return false;
}

$( document ).ready(function() {
    console.log( "ready!" );
    //console.log(winCheck(userArr));
  console.log()
  
    $("#selectX").click(function(){
      if(clicked == 0 ){
        console.log("User selected X")
        clicked++;
        userSymbol = "X";
        aiSymbol = "O";
        gameMode = 1;
      }
    });
  
    $("#selectO").click(function(){
      if(clicked == 0 ){
        console.log("User selected O")
        clicked++;
        userSymbol = "O";
        aiSymbol = "Y";
        gameMode = 1;
      }
    });
  //game modes:
  // 0 - user select O or X
  // 1 - user click on field - > check if win
  // 2 - AI makes a move -> check if win
  // 3 - win/draw/loose
  // repeat 1-2-1-2
  
  
  game = setInterval(function(){
    if(gameMode === 0){
      //console.log("Waiting for user select");
    }

    
    
  },1000);
    
  
  //clicks on fields
  $("#00").click(function(){
    
    //check if field was pressed and if iser input mode is active
    if($("#00").hasClass("notUsed") && gameMode == 1){
      console.log("Halko!");
      $("#00").removeClass("notUsed")
      
      gameArr[0][0] = userSymbol;
      
     
      //gameArr = [["X","X","O"],["O",0,0],["X",0,0]];
      
      console.log(gameArrView(gameArr,userSymbol));
      
      
    }

  });
  
  
});