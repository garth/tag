var React = require('react');
var inputStore = require('../stores/input-store');
var inputActions = require('../actions/input-actions');

var _input = '';

module.exports = React.createClass({
  getInitialState: function () {
    return {
      input: _input
    };
  },

  componentDidMount: function () {
    inputStore.addChangeListener(this._onChange);
    document.getElementById('inputBox').focus();
  },

  componentWillUnmount: function () {
    inputStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      input: _input
    });
  },

  onSubmit: function (e) {
    e.preventDefault();
    var input = _input;
    _input = '';
    inputActions.submit(input);
  },

  onInputChange: function (e) {
    _input = e.target.value;
    this._onChange();
  },

  render: function () {
    return (
      <div className="input-window">
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <input id="inputBox" className="form-control" placeholder="Say something"
              onChange={this.onInputChange} value={this.state.input} />
          </form>
        </div>
      </div>
    );
  }
});
