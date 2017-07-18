"use strict";
var Task = (function () {
    function Task(content, completed) {
        this.content = content;
        this.completed = completed;
        // what should the constructor run every time a 'Task' class is created? Write here:
    }
    return Task;
}());
exports.Task = Task;
// although this class does the same thing as Task, we need to keep track of them seperately:
var deleteOrNah = (function () {
    function deleteOrNah(deleted) {
        this.deleted = deleted;
        // what should the constructor run every time a 'Task' class is created? Write here:
    }
    return deleteOrNah;
}());
exports.deleteOrNah = deleteOrNah;
//# sourceMappingURL=task.js.map