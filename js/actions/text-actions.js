var dispatcher = require('../dispatcher');
var textConstants = require('../constants/text-constants');

module.exports = {

  addText: function (text) {
    dispatcher.dispatch({
      actionType: textConstants.ADD_TEXT,
      text: text
    });
  },

  clearAllText: function () {
    dispatcher.dispatch({
      actionType: textConstants.CLEAR_ALL_TEXT
    });
  }

};
