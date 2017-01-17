var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var Countdown = require("Countdown");

describe("Countdown", () => {

  it ("should exist", () => {
    expect(Countdown).toExist();
  });

  describe("handleSetCountdown", () => {
    it("should set state to 'STARTED' and actually count down", (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.status).toBe("started");

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it("should stop counting down when zero is reached", (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.status).toBe("stopped");
        done();
      }, 3001);
    });

  });
});
