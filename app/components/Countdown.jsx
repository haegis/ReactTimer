var React = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },

  render: function() {
    return (
      <div>
        <Clock totalSeconds={this.state.count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  },

  handleSetCountdown: function(seconds) {
    this.setState({count: seconds});
  }

});

module.exports = Countdown;
