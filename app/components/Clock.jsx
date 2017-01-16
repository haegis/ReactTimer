var React = require("react");

var Clock = React.createClass({
  propTypes: {
    totalSeconds: React.PropTypes.number
  },

  getDefaultProps: function() {
    totalSeconds: 0
  },

  render: function() {
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(this.props.totalSeconds)}
        </span>
      </div>
    );
  },

  formatSeconds: function(totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
});

module.exports = Clock;
