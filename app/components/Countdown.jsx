var React = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");


const STATUS_STARTED = "started", STATUS_STOPPED = "stopped";

var Countdown = React.createClass({

  getInitialState: function() {
    return {
      count: 0,
      status: STATUS_STOPPED
    }
  },

  componentDidUpdate: function(previousProps, previousState) {
      if (this.state.status !== previousState.status) {
        switch (this.state.status) {
          case STATUS_STARTED:
            this.startTimer();
            break;
        }
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
    this.setState({
      count: seconds,
      status: STATUS_STARTED
    });
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }

});

module.exports = Countdown;
