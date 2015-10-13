angular.module('gameApp').controller('GameController', GameController);

function GameController(){
  this.name = "Spock or Peace";
  this.board = [1, 0];
  this.newMove;
  this.playerMoves = playerMoves;

  function playerMoves(){
    console.log(this.newMove)
    // if(this.newMove == null){
    //   this.board.push(this.newMove);
    //   console.log(this.board.push(this.newMove))
    // }
    if(this.newMove % 2 == 0){
      // this.board.push(this.newMove);
      this.newMove = 'o'
      // console.log(newMove)

    } else if (this.newMove % 2 != 0) {
      this.board.push(this.newMove);    
      this.newMove = 'x' 
    }
    
  };








///When you click a square either put in x or o depending on the player maybe judge the player based on who went first
//if player %! = 0 then character = X
//else player % = 0 then character = 0 

//first logic function
//if pla

// function playerMove(){
//   if (player == 0){
//     //add X
//     this.player='X'
//   } else {
//     //add 0 
//     this.player='O'

//   }
// }




};