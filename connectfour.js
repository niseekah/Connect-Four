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
        cells.classList.add('player-one-piece');
      }
      else
      {
        cells.classList.remove('player-one-piece');
      }
      // each row and column is returned
        //cells.innerHTML = fill;
        return fill;    
    }
  }
  console.log(board);
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
      // Grab the column of the board[y] and use a for loop the check if each 
      // circle doesn't have a 'R' or 'Y' in it.
    for(let i = 5; i >= 0; i--)
    {
        if(board[i][y] == ' ')
        {
            cells = 'R';
            break;
        }
    }
    
    let position = document.getElementById(`cell-${x}-${y}`);
    // cells = 'R';
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
  // randomly pick a column and then loop thru the column and mark it 'Y'
  let i = Math.floor(Math.random() * 7);
  console.log(i); 
  let j = Math.floor(Math.random() * 8)

    if(board[i][j] == ' ')
    {
        for(let x = 5; x >= 0; x--)
        {   
            if(board[x][j] == ' ')
            {
                cells = 'Y';
                break;
            }
        }

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

display_board();
stats();
}

 
