var React = require('react');
var TextWindow = require('./text-window.jsx');
var InputWindow = require('./input-window.jsx');
var game = require('../game');

module.exports = React.createClass({
  onRestartClick: function () {
    game.init(true);
    document.getElementById('inputBox').focus();
  },

  render: function () {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-brand">
                <i className="fa fa-connectdevelop"></i> Text Adventure Game
              </div>
            </div>
            <div className="nav navbar-nav navbar-right">
              <button className="btn btn-default navbar-btn" onClick={this.onRestartClick}>Restart</button>
            </div>
          </div>
        </nav>

        <TextWindow />
        <InputWindow />
      </div>
    );
  }
});
