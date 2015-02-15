var dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var textConstants = require('../constants/text-constants');
var assign = require('object-assign');

const CHANGE_EVENT = Symbol('change');

var _text = localStorage.text;

if (_text) {
  _text = JSON.parse(_text);
}
else {
  _text = [];
}

function addText(text) {
  _text.push(text);
  localStorage.text = JSON.stringify(_text);
}

function clearAllText() {
  _text = [];
  delete localStorage.text;
}

var textStore = assign({}, EventEmitter.prototype, {
  getText: function () {
    return _text;
  },

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

module.exports = textStore;

// Register callback to handle all updates
dispatcher.register((action) => {
  switch (action.actionType) {
    case textConstants.ADD_TEXT:
      if (action.text) {
        addText(action.text);
        textStore.emitChange();
      }
      break;

    case textConstants.CLEAR_ALL_TEXT:
      clearAllText();
      textStore.emitChange();
      break;

    default:
      // no op
  }
});
