var React = require('react');

var GameBoard = require('GameBoard');
var GameControls = require('GameControls');
var GameOfLifeEngine = require('GameOfLifeEngine');

var sizeX = 80;
var sizeY = 80;

// Game of Life App
var GameOfLifeApp = React.createClass({
    getInitialState: function()
    {
        return {
          squares: GameOfLifeEngine.generateInitialBoard(sizeX, sizeY),
          gameStatus: 'stopped',
          generations: 0
        };
    },
    componentDidMount: function()
    {
        // start the game straight away
        this.setState({
            gameStatus: 'started'
        });
    },
    componentDidUpdate: function(prevProps, prevState)
    {
        if(this.state.gameStatus !== prevState.gameStatus)
        {
            switch(this.state.gameStatus)
            {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        generations: 0,
                        countdownStatus: 'paused',
                        squares: GameOfLifeEngine.generateClearBoard(sizeX, sizeY)
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function()
    {
        this.timer = setInterval(() =>
        {
            var {generations} = this.state;
            var updatedSquares = GameOfLifeEngine.getNextGeneration(this.state.squares)

            this.setState({
                generations: ++generations,
                squares: updatedSquares
            });
        }, 500);
    },
    handlePause: function()
    {
        // start the game straight away
        this.setState({
            gameStatus: 'paused'
        });
    },
    handleStart: function()
    {
        // start the game straight away
        this.setState({
            gameStatus: 'started'
        });
    },
    handleClear: function()
    {
        // start the game straight away
        this.setState({
            gameStatus: 'stopped'
        });
    },
    render: function()
    {
        return (
            <div>
                <GameControls
                    onStart={this.handleStart}
                    onPause={this.handlePause}
                    onClear={this.handleClear}
                    generations={this.state.generations}/>
                <GameBoard squares={this.state.squares} />
            </div>
        );
    }
});

module.exports = GameOfLifeApp;