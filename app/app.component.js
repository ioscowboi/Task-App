"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// create task component:
var task_1 = require("./model/task");
var AppComponent = (function () {
    function AppComponent() {
        // define task property:
        // always use private properties so that nothing outside can modify it unless must remove:
        this.tasks = [
            new task_1.Task("Buy a monkey", false),
            new task_1.Task("Sell a wrench", false)
        ];
        // ensure only strings are stored to this var:
        // intialize the object to allow browser users to create new tasks::
        this.currentTask = new task_1.Task(null, false);
    }
    // run this method when a task is added:
    AppComponent.prototype.addTask = function () {
        // temp var for storing current data to be added to the list:
        var task = new task_1.Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        // clear text after an event is added:
        this.currentTask.content = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map