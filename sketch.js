var  database;
var position;
var gameState=0;
 var playerCount=0;
 var player,game,form;

function setup(){
  database = firebase.database();
  console.log(database);
 game = new Game();
 game.getState();
 game.start();
  
}

function draw(){
  background("white");
  
  
    drawSprites();
  
}
