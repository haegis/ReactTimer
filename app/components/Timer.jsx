var React = require("react");
var Clock = require("Clock");
var Controls = require("Controls");

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      status: "stopped"
    };
  },

  componentDidUpdate: function(previousProps, previousState) {
    if (this.state.status !== previousState.status) {
      switch (this.state.status) {
        case "started":
          this.startTimer();
          break;
        case "stopped":
          this.setState({count: 0});
        case "paused":
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  render: function() {
    var {count, status} = this.state;

    var renderControls = () => {
      if (status !== "stopped") {
        return <Controls status={status} onStatusChange={this.handleStatusChange} />;

      } else {
          return (<button className="button expanded" onClick={this.onStartButtonClicked}>Start</button>);
      }
    }

    return (
      <div>
        <h1 className="title">Timer</h1>
        <Clock totalSeconds={count} />
        <Controls status={status} onStatusChange={this.handleStatusChange} />
      </div>
    );
  },

  onStartButtonClicked: function(event) {
    this.handleStatusChange("started");
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  },

  handleStatusChange: function(newStatus) {
    this.setState({status: newStatus});
  }
});

module.exports = Timer;
