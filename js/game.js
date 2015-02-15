var textActions = require('./actions/text-actions');
var addText = textActions.addText;

var _state = localStorage.state ? JSON.parse(localStorage.state) : null;

function saveGame(state) {
  _state = state || _state;
  localStorage.state = JSON.stringify(_state);
}

function setup(state) {

  addText('Welcome to the TAG');

  saveGame(state);
}

function playerSaid(text) {

  // game goes here

  // 1. parse text
  // 2. decide actions
  // 3. update state
  // 4. add text

  addText('You said: "' + text + '"!');
}

module.exports = {
  init: function (restart) {
    if (!_state && restart) {
      textActions.clearAllText();
      setup({});
    }
  },
  playerSaid: playerSaid
};
