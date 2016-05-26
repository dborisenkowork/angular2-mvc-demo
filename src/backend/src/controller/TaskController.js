function TaskController(taskModel) {
  this.tasks = taskModel;
}

TaskController.prototype = {
  create: function(title, description) {
    return {
      success: true,
      entity: this.tasks.create(title, description)
    };
  },
  update: function(id, title, description) {
    return {
      success: true,
      entity: this.tasks.update(id, title, description)
    };
  },
  remove: function(id) {
    this.tasks.deleteTask(id);

    return {
      success: true
    };
  },
  getAll: function() {
    return {
      success: true,
      entities: this.tasks.getAll()
    };
  },
  
  getById: function(id) {
    return {
      success: true,
      entities: this.tasks.getById(id)
    };
  }
};

module.exports = TaskController;