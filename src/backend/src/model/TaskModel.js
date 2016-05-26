function Task(id, title, description) {
  this.id = id;
  this.title = title;
  this.description = description;
}

function TaskModel(account)
{
  this.tasks = {};

  for(var n = 1; n < 10; n++) {
    this.createTask('Task ' + n.toString(), 'Demo Task ' + n.toString());
  }
}

TaskModel.prototype = {
  createTask: function(title, description) {
    var task = new Task(Math.ceil(Math.random() * 1000000), title, description);

    this.tasks[task.id] = task;

    return task;
  },

  updateTask: function(id, title, description) {
    if(!this.taks[id]) {
      throw new Error('Not found');
    }

    this.tasks[id].title = title;
    this.tasks[id].description = description;

    return this.tasks[id];
  },

  deleteTask: function(id) {
    if(this.tasks[id]) {
      delete this.tasks;
    }
  },

  getAll: function() {
    var result = [];

    for(var n in this.tasks) {
      if(this.tasks.hasOwnProperty(n)) {
        result.push(this.tasks[n]);
      }
    }

    return result;
  },

  getById: function(id) {
    if(this.tasks[id]) {
      return this.tasks[id];
    }else{
      throw new Error('Not found');
    }
  }
};

module.exports = TaskModel;