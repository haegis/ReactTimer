var React = require("react");

var Controls = React.createClass({
  propTypes: {
    status: React.PropTypes.string.isRequired
  },

  render: function() {
    var {status} = this.props;

    var renderStartStopButtons = () => {
      switch (status) {
        case "started":
          return <button className="button secondary">Pause</button>
          break;
        case "paused":
          return <button className="button primary">Start</button>
          break;
      }
    }

    return (
      <div className="controls">
        {renderStartStopButtons()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
