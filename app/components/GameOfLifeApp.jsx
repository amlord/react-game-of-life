var React = require('react');

var GameBoard = require('GameBoard');
var GameOfLifeEngine = require('GameOfLifeEngine');

// Game of Life App
var GameOfLifeApp = React.createClass({
    getInitialState: function()
    {
        // create an array, 100 x 100, with only dead squares
        var emptySquares = new Array(100).fill(false).map(()=>new Array(100).fill(false));
      
        return {
          squares: GameOfLifeEngine.generateInitialBoard()
        };
    },
    render: function()
    {
        return (
            <div>
                <GameBoard squares={this.state.squares} />
            </div>
        );
    }
});

module.exports = GameOfLifeApp;