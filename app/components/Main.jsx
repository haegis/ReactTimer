var React = require("react");
var Navigation = require("Navigation");

var Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="columns small-6 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
