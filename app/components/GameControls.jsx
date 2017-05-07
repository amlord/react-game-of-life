var React = require('react');

// Game Controls
var GameControls = React.createClass({
    handleRun: function()
    {
        this.props.onStart();
    },
    handlePause: function()
    {
        this.props.onPause();
    },
    handleClear: function()
    {
        this.props.onClear();
    },
    render: function()
    {
        return (
            <div className="gameControls">
                <button onClick={this.handleRun}>Run</button>
                <button onClick={this.handlePause}>Pause</button>
                <button onClick={this.handleClear}>Clear</button>
                <span>Generation: <strong>{this.props.generations}</strong></span>
            </div>
        );
    }
});

module.exports = GameControls;