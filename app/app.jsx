var React = require('react');
var ReactDOM = require('react-dom');

var GameOfLifeApp = require('GameOfLifeApp');

// load Foundation
$(document).foundation();

// load App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <GameOfLifeApp/>,
  document.getElementById('app')
);
