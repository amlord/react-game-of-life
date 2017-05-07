var React = require('react');

// Game Board Row
var GameBoardRow = React.createClass({
    renderCells: function()
    {
      var {cells} = this.props;
      
      return cells.map((cell, i) => {
        return (<div className={"gameBoard__cell" + (cell ? " gameBoard__cell--alive" : " gameBoard__cell--dead") } key={i}></div>);
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