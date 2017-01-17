var React = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");
var Controls = require("Controls");

const STATUS_STARTED = "started", STATUS_STOPPED = "stopped", STATUS_PAUSED = "paused";

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
          case STATUS_STOPPED:
            this.setState({count: 0});
          case STATUS_PAUSED:
            clearInterval(this.timer);
            this.timer = undefined;
            break;
        }
      }
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },

  render: function() {
    var {count, status} = this.state;

    var renderControlArea = () => {
      if (status !== STATUS_STOPPED) {
        return <Controls status={status} onStatusChange={this.handleStatusChange} />;

    } else {
          return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
      }
    };

    return (
      <div>
        <h1 className="title">Countdown</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  },

  handleStatusChange: function(newStatus) {
    this.setState({status: newStatus});
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

      if (newCount === 0) {
        this.setState({status: STATUS_STOPPED});
      }
    }, 1000);
  }

});

module.exports = Countdown;
