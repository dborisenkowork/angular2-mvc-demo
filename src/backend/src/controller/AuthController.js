var accountModel = require('./../model/AccountModel');

function AuthController(accountModel) {
  this.accountModel = accountModel;
}

AuthController.prototype = {
  signIn: function(email, password) {
    return {
      success: true,
      email: email,
      apiKey: password
    }
  },

  signUp: function(email, password) {
    return {
      success: true,
      email: email,
      apiKey: password
    }
  },

  signOut: function() {
    return {
      success: true
    }
  }
};

module.exports = AuthController;