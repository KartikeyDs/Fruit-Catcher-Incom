var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("jungle.jpg");
  player_img = loadImage("basket2.png");
  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);

  if(fruitGroup.isTouching(player1)){
    player1score = player1score+1;
    
    }
  
    if(fruitGroup.isTouching(player2)){
      player2score = player2score+1;
   
      }

  if(playerCount === 2){
      game.update(1);
      gameState = 1;
  }
  
  if(gameState === 1){
      clear();
      game.play();
  }
  if(gameState === 2){
      game.end();
  }
  
  textSize(20);
  stroke("black");
  fill("white");
  text("Player 1 Score : " + player1score, 750, 30);
  text("Player 2 Score : " + player2score, 750, 60)
}
