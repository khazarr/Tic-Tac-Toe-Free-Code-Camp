var userArr = [[0,0,0],[0,0,0],[0,0,0]];
var aiArr = [[0,0,0],[0,0,0],[0,0,0]];
var gameArr = [[0,0,0],[0,0,0],[0,0,0]];
var clicked = 0;
var gameMode = 0;
var userSymbol = "";
var aiSymbol = "";
var game;


function newGame(){
 
  var myVar =  setTimeout(function(){
     //add for EVERY cell notUsed class
      $(".cell").removeClass("notUsed");
      $(".cell").addClass("notUsed");
      $(".cell").html("");
      $(".status").html("");
      gameArr = [[0,0,0],[0,0,0],[0,0,0]];
      clicked = 0;
      gameMode = 0;
      userSymbol = "";
      aiSymbol = "";
     clearInterval(game);
    
  }, 3000);

}

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


//pass here game Arr and Aisym
//works :)
function aiMove(arr,sym){
  
  var flattened = arr.reduce(function(a, b) {
  return a.concat(b);
  });
  //console.log("inside");
  var changedField = -1;
  
  while(changedField == -1){
     changedField = flattened.indexOf(0,Math.floor((Math.random() * arr.length) + 1));
    console.log(changedField);
  }
 
  flattened[changedField] = sym;
  
  var ans = [[],[],[]];
  
  ans[0][0] = flattened[0];
  ans[0][1] = flattened[1];
  ans[0][2] = flattened[2];
  ans[1][0] = flattened[3];
  ans[1][1] = flattened[4];
  ans[1][2] = flattened[5];
  ans[2][0] = flattened[6];
  ans[2][1] = flattened[7];
  ans[2][2] = flattened[8];
  
  //draw ai move
  $("." + changedField).html(sym);
  //make it unclicable
  $("." + changedField).removeClass("notUsed");
  
  console.log(arr);
  console.log(flattened);
  console.log(changedField);
  return ans;
}
//pass here gameArr (with X,O,0)
function isFieldFull(arr1){
  var sum = 0;
  for(var i2 = 0 ; i2 < arr1.length ; i2++){
    if(arr1[i2].indexOf(0) !== -1 ){
      console.log("At least 1 free space");
      return false;
    }
    
  
  }
  console.log("Field is full");
  return true;

}

//pass here 
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
        
          game = setInterval(function(){
    if(gameMode === 0){
      //console.log("Waiting for user select");
    }
    
    if(gameMode === 1){
      console.log("USER MOVE!");
      console.log(gameArr);
    }
    
    if(gameMode === 2){
     // console.log("AI Mode");
      
      //make "move"
      gameArr = aiMove(gameArr,aiSymbol);
      //check if ai win
      aiArr = gameArrView(gameArr,aiSymbol);
      
      
      
      if(winCheck(aiArr)){
        console.log("AI WIN");
        
         $(".status").html("YOU LOST!");
        //clear fields
        //wait for new game
        newGame();
        gameMode = 0;
      }
      else{
        
         //chceck if draw
          if(isFieldFull(gameArr)){
          console.log("DRAW");
           $(".status").html("DRAW");
          
        //new game
          newGame();
        }
      
         //user move
        gameMode = 1;
      }
      
     
      
    }

    
    
  },1000);
      }
    });
  
    $("#selectO").click(function(){
      if(clicked == 0 ){
        console.log("User selected O")
        clicked++;
        userSymbol = "O";
        aiSymbol = "X";
        gameMode = 1;
        
          game = setInterval(function(){
    if(gameMode === 0){
      //console.log("Waiting for user select");
    }
    
    if(gameMode === 1){
      console.log("USER MOVE!");
      console.log(gameArr);
    }
    
    if(gameMode === 2){
     // console.log("AI Mode");
      
      //make "move"
      gameArr = aiMove(gameArr,aiSymbol);
      //check if ai win
      aiArr = gameArrView(gameArr,aiSymbol);
      
      
      
      if(winCheck(aiArr)){
        console.log("AI WIN");
        
         $(".status").html("YOU LOST!");
        //clear fields
        //wait for new game
        newGame();
        gameMode = 0;
      }
      else{
        
         //chceck if draw
          if(isFieldFull(gameArr)){
          console.log("DRAW");
           $(".status").html("DRAW");
          
        //new game
            
          newGame();
          gameMode = 0;
        }
      
         //user move
        gameMode = 1;
      }
      
     
      
    }

    
    
  },1000);
      }
    });
  //game modes:
  // 0 - user select O or X
  // 1 - user click on field - > check if win
  // 2 - AI makes a move -> check if win
  // 3 - win/draw/loose
  // repeat 1-2-1-2
  
  

    
  
  //clicks on fields
  $("#00").click(function(){
    
    //check if field was pressed and if iser input mode is active
    if($("#00").hasClass("notUsed") && gameMode == 1){
      console.log("Halko!");
      $("#00").removeClass("notUsed")
      $("#00").html(userSymbol);
      
      gameArr[0][0] = userSymbol;
      userArr = gameArrView(gameArr,userSymbol);
      aiArr = gameArrView(gameArr,aiSymbol);
      
      console.log(userArr);
      
      //check if user win
      if(winCheck(userArr)){
        console.log("USER WIN");
         $(".status").html("YOU WIN!");
        
        //clear fields
        //wait for new game
        newGame();
      }
      else{
        //chceck if draw
        if(isFieldFull(gameArr)){
          console.log("DRAW");
           $(".status").html("DRAW");
          
        //new game
          newGame();
        }
      
         //ai move
        gameMode = 2;
      }
     
 
      
    }

  });
  
//01
   $("#01").click(function(){
    
    //check if field was pressed and if iser input mode is active
    if($("#01").hasClass("notUsed") && gameMode == 1){
      console.log("Halko!");
      $("#01").removeClass("notUsed")
      $("#01").html(userSymbol);
      
      gameArr[0][1] = userSymbol;
      userArr = gameArrView(gameArr,userSymbol);
      aiArr = gameArrView(gameArr,aiSymbol);
      
      console.log(userArr);
      
      //check if user win
      if(winCheck(userArr)){
        console.log("USER WIN");
         $(".status").html("YOU WIN!");
        
        //clear fields
        //wait for new game
        newGame();
      }
      else{
        //chceck if draw
        if(isFieldFull(gameArr)){
          console.log("DRAW");
           $(".status").html("DRAW");
          
        //new game
          newGame();
        }
      
         //ai move
        gameMode = 2;
      }
     
 
      
    }

  });
  
 //02
   $("#02").click(function(){
    
    //check if field was pressed and if iser input mode is active
    if($("#02").hasClass("notUsed") && gameMode == 1){
      console.log("Halko!");
      $("#02").removeClass("notUsed")
      $("#02").html(userSymbol);
      
      gameArr[0][2] = userSymbol;
      userArr = gameArrView(gameArr,userSymbol);
      aiArr = gameArrView(gameArr,aiSymbol);
      
      console.log(userArr);
      
      //check if user win
      if(winCheck(userArr)){
        console.log("USER WIN");
         $(".status").html("YOU WIN!");
        
        //clear fields
        //wait for new game
        newGame();
      }
      else{
        //chceck if draw
        if(isFieldFull(gameArr)){
          console.log("DRAW");
           $(".status").html("DRAW");
          
        //new game
          newGame();
        }
      
         //ai move
        gameMode = 2;
      }
     
 
      
    }

  });
  
  //10
  
     $("#10").click(function(){
    
    //check if field was pressed and if iser input mode is active
    if($("#10").hasClass("notUsed") && gameMode == 1){
      console.log("Halko!");
      $("#10").removeClass("notUsed")
      $("#10").html(userSymbol);
      
      gameArr[1][0] = userSymbol;
      userArr = gameArrView(gameArr,userSymbol);
      aiArr = gameArrView(gameArr,aiSymbol);
      
      console.log(userArr);
      
      //check if user win
      if(winCheck(userArr)){
        console.log("USER WIN");
         $(".status").html("YOU WIN!");
        
        //clear fields
        //wait for new game
        newGame();
      }
      else{
        //chceck if draw
        if(isFieldFull(gameArr)){
          console.log("DRAW");
           $(".status").html("DRAW");
          
        //new game
          newGame();
        }
      
         //ai move
        gameMode = 2;
      }
     
 
      
    }

  });
  
  //11
  
     $("#11").click(function(){
    
    //check if field was pressed and if iser input mode is active
    if($("#11").hasClass("notUsed") && gameMode == 1){
      console.log("Halko!");
      $("#11").removeClass("notUsed")
      $("#11").html(userSymbol);
      
      gameArr[1][1] = userSymbol;
      userArr = gameArrView(gameArr,userSymbol);
      aiArr = gameArrView(gameArr,aiSymbol);
      
      console.log(userArr);
      
      //check if user win
      if(winCheck(userArr)){
        console.log("USER WIN");
         $(".status").html("YOU WIN!");
        
        //clear fields
        //wait for new game
        newGame();
      }
      else{
        //chceck if draw
        if(isFieldFull(gameArr)){
          console.log("DRAW");
           $(".status").html("DRAW");
          
        //new game
          newGame();
        }
      
         //ai move
        gameMode = 2;
      }
     
 
      
    }

  });
  
  //12
  
     $("#12").click(function(){
    
    //check if field was pressed and if iser input mode is active
    if($("#12").hasClass("notUsed") && gameMode == 1){
      console.log("Halko!");
      $("#12").removeClass("notUsed")
      $("#12").html(userSymbol);
      
      gameArr[1][2] = userSymbol;
      userArr = gameArrView(gameArr,userSymbol);
      aiArr = gameArrView(gameArr,aiSymbol);
      
      console.log(userArr);
      
      //check if user win
      if(winCheck(userArr)){
        console.log("USER WIN");
         $(".status").html("YOU WIN!");
        
        //clear fields
        //wait for new game
        newGame();
      }
      else{
        //chceck if draw
        if(isFieldFull(gameArr)){
          console.log("DRAW");
           $(".status").html("DRAW");
          
        //new game
          newGame();
        }
      
         //ai move
        gameMode = 2;
      }
     
 
      
    }

  });
  
  //20
      $("#20").click(function(){
    
    //check if field was pressed and if iser input mode is active
    if($("#20").hasClass("notUsed") && gameMode == 1){
      console.log("Halko!");
      $("#20").removeClass("notUsed")
      $("#20").html(userSymbol);
      
      gameArr[2][0] = userSymbol;
      userArr = gameArrView(gameArr,userSymbol);
      aiArr = gameArrView(gameArr,aiSymbol);
      
      console.log(userArr);
      
      //check if user win
      if(winCheck(userArr)){
        console.log("USER WIN");
         $(".status").html("YOU WIN!");
        
        //clear fields
        //wait for new game
        newGame();
      }
      else{
        //chceck if draw
        if(isFieldFull(gameArr)){
          console.log("DRAW");
           $(".status").html("DRAW");
          
        //new game
          newGame();
        }
      
         //ai move
        gameMode = 2;
      }
     
 
      
    }

  });
  //21
        $("#21").click(function(){
    
    //check if field was pressed and if iser input mode is active
    if($("#21").hasClass("notUsed") && gameMode == 1){
      console.log("Halko!");
      $("#21").removeClass("notUsed")
      $("#21").html(userSymbol);
      
      gameArr[2][1] = userSymbol;
      userArr = gameArrView(gameArr,userSymbol);
      aiArr = gameArrView(gameArr,aiSymbol);
      
      console.log(userArr);
      
      //check if user win
      if(winCheck(userArr)){
        console.log("USER WIN");
         $(".status").html("YOU WIN!");
        
        //clear fields
        //wait for new game
        newGame();
      }
      else{
        //chceck if draw
        if(isFieldFull(gameArr)){
          console.log("DRAW");
           $(".status").html("DRAW");
          
        //new game
          newGame();
        }
      
         //ai move
        gameMode = 2;
      }
     
 
      
    }

  });
  //22
        $("#22").click(function(){
    
    //check if field was pressed and if iser input mode is active
    if($("#22").hasClass("notUsed") && gameMode == 1){
      console.log("Halko!");
      $("#22").removeClass("notUsed")
      $("#22").html(userSymbol);
      
      gameArr[2][2] = userSymbol;
      userArr = gameArrView(gameArr,userSymbol);
      aiArr = gameArrView(gameArr,aiSymbol);
      
      console.log(userArr);
      
      //check if user win
      if(winCheck(userArr)){
        console.log("USER WIN");
         $(".status").html("YOU WIN!");
        
        //clear fields
        //wait for new game
        newGame();
      }
      else{
        //chceck if draw
        if(isFieldFull(gameArr)){
          console.log("DRAW");
           $(".status").html("DRAW");
          
        //new game
          newGame();
        }
      
         //ai move
        gameMode = 2;
      }
     
 
      
    }

  });
  
});