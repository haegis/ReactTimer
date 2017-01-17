var React = require("react");

var Controls = React.createClass({
  propTypes: {
    status: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  render: function() {
    var {status} = this.props;

    var renderStartStopButtons = () => {
      switch (status) {
        case "started":
          return <button className="button secondary" onClick={this.onStatusChange("paused")}>Pause</button>
          break;
        case "paused":
        case "stopped":
          return <button className="button primary" onClick={this.onStatusChange("started")}>Start</button>
          break;
      }
    }

    return (
      <div className="controls">
        {renderStartStopButtons()}
        <button className="button alert hollow" onClick={this.onStatusChange("stopped")}>Clear</button>
      </div>
    );
  },

  onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }
});

module.exports = Controls;
