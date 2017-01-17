var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var Timer = require("Timer");

describe("TimerForm", () => {

  it ("should exist", () => {
    expect(Timer).toExist();
  });

  describe("handleStatusChange", () => {
    it("should set status to 'STARTED' and actually count", (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange("started");

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.status).toBe("started");
        done();
      }, 3001);
    });

    it("should set status to 'PAUSE' and pause count", (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange("started");
      timer.handleStatusChange("paused");

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.status).toBe("paused");
        done();
      }, 2001);
    });

    it("should set status to 'STOP' and reset count", (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange("started");

      setTimeout(() => {
        timer.handleStatusChange("stopped");

        expect(timer.state.count).toBe(0);
        expect(timer.state.status).toBe("stopped");
        done();
      }, 2001);
    });
  });
});
