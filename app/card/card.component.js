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
// create property to pass data from the task model:
var task_1 = require('../model/task');
var CardComponent = (function () {
    function CardComponent() {
    }
    // for user error, create a toggle for undo-ing if a task is accidentally marked complete:
    CardComponent.prototype.statusToggle = function () {
        this.task.completed = !this.task.completed;
    };
    CardComponent.prototype.deleteToggle = function () {
        this.deleteCheck.deleted = !this.deleteCheck.deleted;
        console.log('delete pushed!');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], CardComponent.prototype, "task", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.deleteOrNah)
    ], CardComponent.prototype, "deleteCheck", void 0);
    CardComponent = __decorate([
        core_1.Component({
            // Meta Data:
            // sets the common path for pointing to files (ex: templateUrl, see the tsconfig.json for common.js)
            moduleId: module.id,
            // selector specifies names you want to use when this is called in other components
            selector: 'app-card',
            // html elements of the component
            templateUrl: 'card.component.html',
            // use "Urls" to pull in stylesheets from a separate file
            styleUrls: ['card.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map