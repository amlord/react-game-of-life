var React = require('react');

// Game Board Row
var GameBoardRow = React.createClass({
    handleClick: function(e) {
        this.props.onCellClick(
            e.target.getAttribute('data-x'),
            e.target.getAttribute('data-y')
        );
    },
    renderCells: function()
    {
      var {cells} = this.props;
      
      return cells.map((cell, i) => {
        return (
            <div
                className={"gameBoard__cell" + (cell ? " gameBoard__cell--alive" : " gameBoard__cell--dead") }
                key={i}
                data-y={this.props.row}
                data-x={i}
                onClick={this.handleClick}></div>
        );
      });
    },
    render: function()
    {
        return (
            <div className="gameBoard__row">
                {this.renderCells()}
            </div>
        );
    }
});

module.exports = GameBoardRow;