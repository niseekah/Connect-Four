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

// Create a Function that 
function play_Board()
{
  for(let i = 0; i < 6; i++)
  {
    for(let j = 0; j < 7; j++)
    {
      // created a variable called rows that stores the the id attribute called rows from CSS file.
      let rows = document.getElementById(`slot-${i}-${j}`);
      // store each row and column inside a 
      // variable named fill
      let fill = board[i][j];

      // If the vairable fill is a 0 then
      // remove the function called clicked
      // else add the function called clicked
      if(fill == 0)
      {
        rows.classList.remove('clicked');
      }
      else
      {
        rows.classList.add('clicked');
      }
      // each row and column is returned
      rows.innerHTML = fill;
    }
  }
}



function players_turn(x, y)
{
  let rows = board[x][y];
  if(rows != '')
  {

  }
  else
  {
    board[x][y] = 'R';
    play_Board();
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
      record();
    }
  }

}

function record()
{
  document.getElementById('record').innerHTML = `wins: ${wins}, losses: ${losses}, ties: ${ties}`;
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
  play_Board();
}

function ai_turn()
{
  for(let i = 0; i < 6; i++)
  {
    for(let j = 0; j < 7; j++)
    {
      if(board[i][j] == ' ')
      {
        board[x][y] = 'Y';
        play_Board();
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
        record();
        return;
      }
    }
  }
}

play_Board();
record();

