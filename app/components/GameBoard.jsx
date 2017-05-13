var React = require('react');

var GameBoardRow = require('GameBoardRow');

// Game Board
var GameBoard = React.createClass({
    handleCellClick: function(x, y){
        this.props.onSquareClick(x, y);
    },
    renderRows: function()
    {
      var {squares} = this.props;
      
      return squares.map((row, i) => {
        return (
            <GameBoardRow
                key={i}
                cells={row}
                row={i}
                onCellClick={this.handleCellClick} />
        );
      });
    },
    render: function()
    {
        return (
            <div className="gameBoard">
                {this.renderRows()}
            </div>
        );
    }
});

module.exports = GameBoard;