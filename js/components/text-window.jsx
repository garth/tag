var React = require('react');
var textStore = require('../stores/text-store');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      text: textStore.getText()
    };
  },

  componentDidMount: function () {
    textStore.addChangeListener(this._onChange);
    this.componentDidUpdate();
  },

  componentWillUnmount: function () {
    textStore.removeChangeListener(this._onChange);
  },

  componentDidUpdate: function () {
    window.scrollTo(0, document.body.scrollHeight);
  },

  _onChange: function () {
    this.setState({
      text: textStore.getText()
    });
  },

  render: function () {
    return (
      <div className="text-window">
        <div className="container">
          <div>{this.state.text.map(function (text) {
            return <p>{text}</p>;
          })}</div>
        </div>
      </div>
    );
  }
});


