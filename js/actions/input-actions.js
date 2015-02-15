var dispatcher = require('../dispatcher');
var inputConstants = require('../constants/input-constants');

module.exports = {

  submit: function (text) {
    dispatcher.dispatch({
      actionType: inputConstants.INPUT_SUBMIT,
      text: text
    });
  }

};
