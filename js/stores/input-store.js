var dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var inputConstants = require('../constants/input-constants');
var game = require('../game');
var assign = require('object-assign');

const CHANGE_EVENT = Symbol('change');

function submit(text) {
  setTimeout(function () {
    game.playerSaid(text);
  }, 1);
}

var inputStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

module.exports = inputStore;

// Register callback to handle all updates
dispatcher.register((action) => {
  switch (action.actionType) {
    case inputConstants.INPUT_SUBMIT:
      if (action.text) {
        submit(action.text);
        inputStore.emitChange();
      }
      break;

    default:
      // no op
  }
});
