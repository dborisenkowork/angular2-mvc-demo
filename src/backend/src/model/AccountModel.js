function AccountModel()
{
  this.accounts = {};
  this.createAccount('demo@gmail.com', '1234');
}

AccountModel.prototype = {
  createAccount: function(email, password) {
    var account = new Account(Math.ceil(Math.random() * 1000000), email, password);

    this.accounts[account.id] = account;
  },
  getAccount: function(id) {
    for(var n in this.accounts) {
      if(this.accounts.hasOwnProperty(n)) {
        if(this.accounts[n].id === id) {
          return this.accounts[n];
        }
      }
    }

    throw new Error('Not found');
  },
  getAccountByPassword: function(password) {
    for(var n in this.accounts) {
      if(this.accounts.hasOwnProperty(n)) {
        if(this.accounts[n].password === password) {
          return this.accounts[n];
        }
      }
    }

    throw new Error('Not found');
  }
};

function Account(id, email, password) {
  this.tasks = {};
  this.id = id;
  this.email = email;
  this.password = password;
}

Account.prototype = {
  setTasks: function(tasks) {
    this.tasks = tasks;
  }
};

module.exports = AccountModel;