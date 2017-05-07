var React = require('react');

var GameBoardRow = require('GameBoardRow');

// Game Board
var GameBoard = React.createClass({
    renderRows: function()
    {
      var {squares} = this.props;
      
      return squares.map((row, i) => {
        return (<GameBoardRow key={i} cells={row} />);
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