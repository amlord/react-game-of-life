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
                <button className="btn gameControls__btn" onClick={this.handleRun}>Run</button>
                <button className="btn gameControls__btn" onClick={this.handlePause}>Pause</button>
                <button className="btn gameControls__btn" onClick={this.handleClear}>Clear</button>
                <span className="gameControls__generations">Generation: <strong>{this.props.generations}</strong></span>
            </div>
        );
    }
});

module.exports = GameControls;