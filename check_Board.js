function check_Board(board)
{
  if
  (
/* Horizontal==============================================================================*/

    (board[0][0] == 'R' &&
     board[0][1] == 'R' &&
     board[0][2] == 'R' &&
     board[0][3] == 'R') ||
     (board[0][1] == 'R' &&
      board[0][2] == 'R' &&
      board[0][3] == 'R' &&
      board[0][4] == 'R') ||
      (board[0][2] == 'R' &&
       board[0][3] == 'R' &&
       board[0][4] == 'R' &&
       board[0][5] == 'R') ||
       (board[0][3] == 'R' &&
        board[0][4] == 'R' &&
        board[0][5] == 'R' &&
        board[0][6] == 'R') ||


      (board[1][0] == 'R' &&
       board[1][1] == 'R' &&
       board[1][2] == 'R' &&
       board[1][3] == 'R') ||
      (board[1][1] == 'R' &&
       board[1][2] == 'R' &&
       board[1][3] == 'R' &&
       board[1][4] == 'R') ||
      (board[1][2] == 'R' &&
       board[1][3] == 'R' &&
       board[1][4] == 'R' &&
       board[1][5] == 'R') ||
      (board[1][3] == 'R' &&
       board[1][4] == 'R' &&
       board[1][5] == 'R' &&
       board[1][6] == 'R') ||

      (board[2][0] == 'R' &&
       board[2][1] == 'R' &&
       board[2][2] == 'R' &&
       board[2][3] == 'R') ||
      (board[2][1] == 'R' &&
       board[2][2] == 'R' &&
       board[2][3] == 'R' &&
       board[2][4] == 'R') ||
      (board[2][2] == 'R' &&
       board[2][3] == 'R' &&
       board[2][4] == 'R' &&
       board[2][5] == 'R') ||
      (board[2][3] == 'R' &&
       board[2][4] == 'R' &&
       board[2][5] == 'R' &&
       board[2][6] == 'R') ||
      

      (board[3][0] == 'R' &&
       board[3][1] == 'R' &&
       board[3][2] == 'R' &&
       board[3][3] == 'R') ||
      (board[3][1] == 'R' &&
       board[3][2] == 'R' &&
       board[3][3] == 'R' &&
       board[3][4] == 'R') ||
      (board[3][2] == 'R' &&
       board[3][3] == 'R' &&
       board[3][4] == 'R' &&
       board[3][5] == 'R') ||
      (board[3][3] == 'R' &&
       board[3][4] == 'R' &&
       board[3][5] == 'R' &&
       board[3][6] == 'R') ||


      (board[4][0] == 'R' &&
       board[4][1] == 'R' &&
       board[4][2] == 'R' &&
       board[4][3] == 'R') ||
      (board[4][1] == 'R' &&
       board[4][2] == 'R' &&
       board[4][3] == 'R' &&
       board[4][4] == 'R') ||
      (board[4][2] == 'R' &&
       board[4][3] == 'R' &&
       board[4][4] == 'R' &&
       board[4][5] == 'R') ||
      (board[4][3] == 'R' &&
       board[4][4] == 'R' &&
       board[4][5] == 'R' &&
       board[4][6] == 'R') ||


       (board[5][0] == 'R' &&
       board[5][1] == 'R' &&
       board[5][2] == 'R' &&
       board[5][3] == 'R') ||
      (board[5][1] == 'R' &&
       board[5][2] == 'R' &&
       board[5][3] == 'R' &&
       board[5][4] == 'R') ||
      (board[5][2] == 'R' &&
       board[5][3] == 'R' &&
       board[5][4] == 'R' &&
       board[5][5] == 'R') ||
      (board[5][3] == 'R' &&
       board[5][4] == 'R' &&
       board[5][5] == 'R' &&
       board[5][6] == 'R') ||
       
/* Vertical==============================================================================================================*/

      (board[0][0] == 'R' &&
       board[1][0] == 'R' &&
       board[2][0] == 'R' &&
       board[3][0] == 'R' )||
      (board[1][0] == 'R' &&
       board[2][0] == 'R' &&
       board[3][0] == 'R' &&
       board[4][0] == 'R' ) ||
      (board[2][0] == 'R' &&
       board[3][0] == 'R' &&
       board[4][0] == 'R' &&
       board[5][0] == 'R' ) ||


      (board[0][1] == 'R' &&
       board[1][1] == 'R' &&
       board[2][1] == 'R' &&
       board[3][1] == 'R' ) ||
      (board[1][1] == 'R' &&
       board[2][1] == 'R' &&
       board[3][1] == 'R' &&
       board[4][1] == 'R') ||
      (board[2][1] == 'R' &&
       board[3][1] == 'R' &&
       board[4][1] == 'R' &&
       board[5][1] == 'R') ||


      (board[0][2] == 'R' &&
       board[1][2] == 'R' &&
       board[2][2] == 'R' &&
       board[3][2] == 'R' ) ||
      (board[1][2] == 'R' &&
       board[2][2] == 'R' &&
       board[3][2] == 'R' &&
       board[4][2] == 'R') ||
      (board[2][2] == 'R' &&
       board[3][2] == 'R' &&
       board[4][2] == 'R' &&
       board[5][2] == 'R') ||


      (board[0][3] == 'R' &&
       board[1][3] == 'R' &&
       board[2][3] == 'R' &&
       board[3][3] == 'R') ||
      (board[1][3] == 'R' &&
       board[2][3] == 'R' &&
       board[3][3] == 'R' &&
       board[4][3] == 'R') ||
      (board[2][3] == 'R' &&
       board[3][3] == 'R' &&
       board[4][3] == 'R' &&
       board[5][3] == 'R') ||


      (board[0][4] == 'R' &&
       board[1][4] == 'R' &&
       board[2][4] == 'R' &&
       board[3][4] == 'R') ||
      (board[1][4] == 'R' &&
       board[2][4] == 'R' &&
       board[3][4] == 'R' &&
       board[4][4] == 'R') ||
      (board[2][4] == 'R' &&
       board[3][4] == 'R' &&
       board[4][4] == 'R' &&
       board[5][4] == 'R') ||


      (board[0][5] == 'R' &&
       board[1][5] == 'R' &&
       board[2][5] == 'R' &&
       board[3][5] == 'R') ||
      (board[1][5] == 'R' &&
       board[2][5] == 'R' &&
       board[3][5] == 'R' &&
       board[4][5] == 'R') ||
      (board[2][5] == 'R' &&
       board[3][5] == 'R' &&
       board[4][5] == 'R' &&
       board[5][5] == 'R') ||


      (board[0][6] == 'R' &&
       board[1][6] == 'R' &&
       board[2][6] == 'R' &&
       board[3][6] == 'R') ||
      (board[1][6] == 'R' &&
       board[2][6] == 'R' &&
       board[3][6] == 'R' &&
       board[4][6] == 'R' ) ||
      (board[2][6] == 'R' &&
       board[3][6] == 'R' &&
       board[4][6] == 'R' &&
       board[5][6] == 'R') ||

/*A Cross ================================================================================================*/

      (board[0][0] == 'R' &&
       board[1][1] == 'R' &&
       board[2][2] == 'R' &&
       board[3][3] == 'R') ||
      (board[1][1] == 'R' &&
       board[2][2] == 'R' &&
       board[3][3] == 'R' &&
       board[4][4] == 'R') ||
      (board[2][2] == 'R' &&
       board[3][3] == 'R' &&
       board[4][4] == 'R' &&
       board[5][5] == 'R') ||

       (board[0][1] == 'R' &&
       board[1][2] == 'R' &&
       board[2][3] == 'R' &&
       board[3][4] == 'R') ||
      (board[1][2] == 'R' &&
       board[2][3] == 'R' &&
       board[3][4] == 'R' &&
       board[4][5] == 'R') ||
      (board[2][3] == 'R' &&
       board[3][4] == 'R' &&
       board[4][5] == 'R' &&
       board[5][6] == 'R') ||

      (board[0][2] == 'R' &&
       board[1][3] == 'R' &&
       board[2][4] == 'R' &&
       board[3][5] == 'R') ||
      (board[1][3] == 'R' &&
       board[2][4] == 'R' &&
       board[3][5] == 'R' &&
       board[4][6] == 'R') ||

      (board[1][0] == 'R' &&
       board[2][1] == 'R' &&
       board[3][2] == 'R' &&
       board[4][3] == 'R') ||
      (board[2][1] == 'R' &&
       board[3][2] == 'R' &&
       board[4][3] == 'R' &&
       board[5][4] == 'R') ||
      
      (board[0][3] == 'R' &&
       board[1][4] == 'R' &&
       board[2][5] == 'R' &&
       board[3][6] == 'R') ||
      
      (board[2][0] == 'R' &&
       board[3][1] == 'R' &&
       board[4][2] == 'R' &&
       board[5][3] == 'R')
  )
  {
    return 'You won';
  }



  else if
  (
 /* Horizontal==============================================================================*/

    (board[0][0] == 'Y' &&
     board[0][1] == 'Y' &&
     board[0][2] == 'Y' &&
     board[0][3] == 'Y') ||
     (board[0][1] == 'Y' &&
      board[0][2] == 'Y' &&
      board[0][3] == 'Y' &&
      board[0][4] == 'Y') ||
      (board[0][2] == 'Y' &&
       board[0][3] == 'Y' &&
       board[0][4] == 'Y' &&
       board[0][5] == 'Y') ||
       (board[0][3] == 'Y' &&
        board[0][4] == 'Y' &&
        board[0][5] == 'Y' &&
        board[0][6] == 'Y') ||


      (board[1][0] == 'Y' &&
       board[1][1] == 'Y' &&
       board[1][2] == 'Y' &&
       board[1][3] == 'Y') ||
      (board[1][1] == 'Y' &&
       board[1][2] == 'Y' &&
       board[1][3] == 'Y' &&
       board[1][4] == 'Y') ||
      (board[1][2] == 'Y' &&
       board[1][3] == 'Y' &&
       board[1][4] == 'Y' &&
       board[1][5] == 'Y') ||
      (board[1][3] == 'Y' &&
       board[1][4] == 'Y' &&
       board[1][5] == 'Y' &&
       board[1][6] == 'Y') ||

      (board[2][0] == 'Y' &&
       board[2][1] == 'Y' &&
       board[2][2] == 'Y' &&
       board[2][3] == 'Y') ||
      (board[2][1] == 'Y' &&
       board[2][2] == 'Y' &&
       board[2][3] == 'Y' &&
       board[2][4] == 'Y') ||
      (board[2][2] == 'Y' &&
       board[2][3] == 'Y' &&
       board[2][4] == 'Y' &&
       board[2][5] == 'Y') ||
      (board[2][3] == 'Y' &&
       board[2][4] == 'Y' &&
       board[2][5] == 'Y' &&
       board[2][6] == 'Y') ||
      

      (board[3][0] == 'Y' &&
       board[3][1] == 'Y' &&
       board[3][2] == 'Y' &&
       board[3][3] == 'Y') ||
      (board[3][1] == 'Y' &&
       board[3][2] == 'Y' &&
       board[3][3] == 'Y' &&
       board[3][4] == 'Y') ||
      (board[3][2] == 'Y' &&
       board[3][3] == 'Y' &&
       board[3][4] == 'Y' &&
       board[3][5] == 'Y') ||
      (board[3][3] == 'Y' &&
       board[3][4] == 'Y' &&
       board[3][5] == 'Y' &&
       board[3][6] == 'Y') ||


      (board[4][0] == 'Y' &&
       board[4][1] == 'Y' &&
       board[4][2] == 'Y' &&
       board[4][3] == 'Y') ||
      (board[4][1] == 'Y' &&
       board[4][2] == 'Y' &&
       board[4][3] == 'Y' &&
       board[4][4] == 'Y') ||
      (board[4][2] == 'Y' &&
       board[4][3] == 'Y' &&
       board[4][4] == 'Y' &&
       board[4][5] == 'Y') ||
      (board[4][3] == 'Y' &&
       board[4][4] == 'Y' &&
       board[4][5] == 'Y' &&
       board[4][6] == 'Y') ||


      (board[5][0] == 'Y' &&
        board[5][1] == 'Y' &&
        board[5][2] == 'Y' &&
        board[5][3] == 'Y') ||
      (board[5][1] == 'Y' &&
        board[5][2] == 'Y' &&
        board[5][3] == 'Y' &&
       Mboard[5][4] == 'Y') ||
      (board[5][2] == 'Y' &&
       board[5][3] == 'Y' &&
       board[5][4] == 'Y' &&
       board[5][5] == 'Y') ||
      (board[5][3] == 'Y' &&
       board[5][4] == 'Y' &&
       board[5][5] == 'Y' &&
       board[5][6] == 'Y') ||
       
/* Vertical========================================================================*/
      (board[0][0] == 'Y' &&
       board[1][0] == 'Y' &&
       board[2][0] == 'Y' &&
       board[3][0] == 'Y') ||
      (board[1][0] == 'Y' &&
       board[2][0] == 'Y' &&
       board[3][0] == 'Y' &&
       board[4][0] == 'Y') ||
      (board[2][0] == 'Y' &&
       board[3][0] == 'Y' &&
       board[4][0] == 'Y' &&
       board[5][0] == 'Y') ||


      (board[0][1] == 'Y' &&
       board[1][1] == 'Y' &&
       board[2][1] == 'Y' &&
       board[3][1] == 'Y') ||
      (board[1][1] == 'Y' &&
       board[2][1] == 'Y' &&
       board[3][1] == 'Y' &&
       board[4][1] == 'Y') ||
      (board[2][1] == 'Y' &&
       board[3][1] == 'Y' &&
       board[4][1] == 'Y' &&
       board[5][1] == 'Y' ) ||


      (board[0][2] == 'Y' &&
       board[1][2] == 'Y' &&
       board[2][2] == 'Y' &&
       board[3][2] == 'Y') ||
      (board[1][2] == 'Y' &&
       board[2][2] == 'Y' &&
       board[3][2] == 'Y' &&
       board[4][2] == 'Y') ||
      (board[2][2] == 'Y' &&
       board[3][2] == 'Y' &&
       board[4][2] == 'Y' &&
       board[5][2] == 'Y') ||


      (board[0][3] == 'Y' &&
       board[1][3] == 'Y' &&
       board[2][3] == 'Y' &&
       board[3][3] == 'Y') ||
      (board[1][3] == 'Y' &&
       board[2][3] == 'Y' &&
       board[3][3] == 'Y' &&
       board[4][3] == 'Y') ||
      (board[2][3] == 'Y' &&
       board[3][3] == 'Y' &&
       board[4][3] == 'Y' &&
       board[5][3] == 'Y') ||


      (board[0][4] == 'Y' &&
       board[1][4] == 'Y' &&
       board[2][4] == 'Y' &&
       board[3][4] == 'Y') ||
      (board[1][4] == 'Y' &&
       board[2][4] == 'Y' &&
       board[3][4] == 'Y' &&
       board[4][4] == 'Y') ||
      (board[2][4] == 'Y' &&
       board[3][4] == 'Y' &&
       board[4][4] == 'Y' &&
       board[5][4] == 'Y') ||


      (board[0][5] == 'Y' &&
       board[1][5] == 'Y' &&
       board[2][5] == 'Y' &&
       board[3][5] == 'Y') ||
      (board[1][5] == 'Y' &&
       board[2][5] == 'Y' &&
       board[3][5] == 'Y' &&
       board[4][5] == 'Y') ||
      (board[2][5] == 'Y' &&
       board[3][5] == 'Y' &&
       board[4][5] == 'Y' &&
       board[5][5] == 'Y') ||


      (board[0][6] == 'Y' &&
       board[1][6] == 'Y' &&
       board[2][6] == 'Y' &&
       board[3][6] == 'Y' ) ||
      (board[1][6] == 'Y' &&
       board[2][6] == 'Y' &&
       board[3][6] == 'Y' &&
       board[4][6] == 'Y' ) ||
      (board[2][6] == 'Y' &&
       board[3][6] == 'Y' &&
       board[4][6] == 'Y' &&
       board[5][6] == 'Y' ) ||

/*A Cross ================================================================================================*/

      (board[0][0] == 'Y' &&
       board[1][1] == 'Y' &&
       board[2][2] == 'Y' &&
       board[3][3] == 'Y') ||
      (board[1][1] == 'Y' &&
       board[2][2] == 'Y' &&
       board[3][3] == 'Y' &&
       board[4][4] == 'Y') ||
      (board[2][2] == 'Y' &&
       board[3][3] == 'Y' &&
       board[4][4] == 'Y' &&
       board[5][5] == 'Y') ||

       (board[0][1] == 'Y' &&
       board[1][2] == 'Y' &&
       board[2][3] == 'Y' &&
       board[3][4] == 'Y') ||
      (board[1][2] == 'Y' &&
       board[2][3] == 'Y' &&
       board[3][4] == 'Y' &&
       board[4][5] == 'Y') ||
      (board[2][3] == 'Y' &&
       board[3][4] == 'Y' &&
       board[4][5] == 'Y' &&
       board[5][6] == 'Y') ||

      (board[0][2] == 'Y' &&
       board[1][3] == 'Y' &&
       board[2][4] == 'Y' &&
       board[3][5] == 'Y') ||
      (board[1][3] == 'Y' &&
       board[2][4] == 'Y' &&
       board[3][5] == 'Y' &&
       board[4][6] == 'Y') ||

      (board[1][0] == 'Y' &&
       board[2][1] == 'Y' &&
       board[3][2] == 'Y' &&
       board[4][3] == 'Y') ||
      (board[2][1] == 'Y' &&
       board[3][2] == 'Y' &&
       board[4][3] == 'Y' &&
       board[5][4] == 'Y') ||
      
      (board[0][3] == 'Y' &&
       board[1][4] == 'Y' &&
       board[2][5] == 'Y' &&
       board[3][6] == 'Y') ||
      
      (board[2][0] == 'Y' &&
       board[3][1] == 'Y' &&
       board[4][2] == 'Y' &&
       board[5][3] == 'Y')
  )
  {
    return 'Sorry you loss';
  }
  else
  {
    for(let i = 0; i < 6; i++)
    {
      for(let j = 0; j < 7; j++)
      {
        if(board[i][j] == ' ')
        {
          return 'continue';
        }
      }
    }
  }

  return 'tie';
}