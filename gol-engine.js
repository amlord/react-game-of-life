// The 'Game of Life' Engine
function GameOfLifeEngine( )
{
  // ----- private variables --------------------
  
  // ----- private functions ---------------------
  function _getEmptyBoard()
  {
      return new Array(100).fill(false).map(()=>new Array(100).fill(false));
  }
  function _calcNeighbours(currentGen, x, y)
  {
    // start with -1 if the cell is alive
    var neighbours = (currentGen[x][y] ? -1 : 0);
    
    // loop through 9 cells, where x,y is at the centre
    for(var i = -1; i <= 1; i++)
    {
      for(var j = -1; j <= 1; j++)
      {
        try{
            // check for a live cell
            if(currentGen[x+i][y+j] === true)
            {
                neighbours++;
            }
        }
        catch(e){
            // cell out-of-bounds
        }
      }
    }

    return neighbours;
  }

  // ----- public functions ---------------------
  this.getNextGeneration = function( currentGen )
  {
    var neighbours = 0;

    return currentGen.map((row, y) => {
        return row.map((cell, x) => {
            // get the number of live neighbours a cell has
            neighbours = _calcNeighbours( currentGen, x, y );
            
            // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
            if(cell && neighbours < 2) {
                return false;
            }
            // Any live cell with two or three live neighbours lives on to the next generation.
            if(cell && (neighbours === 2 || neighbours === 3)) {
                return true;
            }
            // Any live cell with more than three live neighbours dies, as if by overpopulation.
            if(cell && neighbours > 3) {
                return false;
            }
            // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
            if(!cell && neighbours === 3) {
                return true;
            }

            // dead by default
            return false;
        });
    });
  };
  this.generateInitialBoard = function()
  {
    
  };
}

var gole = new GameOfLifeEngine();
var currentGeneration = new Array(100).fill(false).map(()=>new Array(100).fill(false));

console.log(gole.getNextGeneration(currentGeneration));