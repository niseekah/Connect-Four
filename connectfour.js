// Create a variable that is a board
let board = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ']
  ];

// Create three variable called wins, losses and ties
let wins = 0;
let losses = 0;
let ties = 0;
const playerOne = document.querySelectorAll('.player-one-piece')
const playerTwo = document.querySelectorAll('.player-two-piece')

// Create a Function that 
function display_board()
{
  for(let i = 0; i < 6; i++)
  {
    for(let j = 0; j < 7; j++)
    {
      
      let cells = document.getElementById(`cell-${i}-${j}`);
      let fill = board[i][j];

      // If the vairable fill is a 0 then
      // remove the function called clicked
      // else add the function called clicked
      if(fill == ' ')
      {
        cells.classList.remove('clicked');
      }
      else
      {
       cells.classList.add('clicked');
      }
      // each row and column is returned
        cells.innerHTML = fill;
    }
  }
}



function players_turn(x, y)
{
  console.log('I am in players turn function');
  let cells = board[x][y];
  if(cells != ' ')
  {

  }
  else
  {

    board[x][y] = 'R';
    display_board();
    const result = check_Board(board);
    if(result == 'continue')
    {
      ai_turn();
    }
    else
    {
      alert(result);
      switch(result)
      {
        case 'win':
          wins++;
          break;
        case 'tie':
          ties++;
          break;
      }
      stats();
    }
  }

}

function stats()
{
  document.getElementById('stats').innerHTML = `wins: ${wins}, losses: ${losses}, ties: ${ties}`;
}

function reset()
{
  board = 
  [
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ']
  ];
  display_board();
}

function ai_turn()
{
  for(let i = 0; i < 6; i++)
  {
    for(let j = 0; j < 7; j++)
    {
      if(board[i][j] == ' ')
      {

        board[i][j] = 'Y';
        display_board();

        const result = check_Board(board);
        if(result == 'continue')
        {
          ai_turn();
        }
        else{
          alert(result);
          switch(result){
        case 'loss':
          losses++;
          break;
        case 'tie':
          ties++;
          break;
          }
  
        stats();
        return;
      }
    }
  }
}


display_board();
stats();
}
