import { Component } from '@angular/core';

// create task component:
import { Task, deleteOrNah } from "./model/task";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css']
})
export class AppComponent {
    // define task property:
    // always use private properties so that nothing outside can modify it unless must remove:
        // deleted pre-defined task card data, and start w an empty array
        // we do this by assigning "Task[]" object to tasks as an empty array:
    private tasks: Task[] = [];
    private deleteChecks: deleteOrNah[] = [];
    // ensure only strings are stored to this var:
        // intialize the object to allow browser users to create new tasks::
    private currentTask = new Task(null, false);
    private deleteC = new deleteOrNah(false);
    // run this method when a task is added:
    addTask(){
        // temp var for storing current data to be added to the list:
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        let deleteCheck = new deleteOrNah(this.deleteC.deleted);
        this.tasks.push(task);
        this.deleteChecks.push(deleteCheck);
        // clear text after an event is added:
        this.currentTask.content = null;
        // reset deleteC to false no matter what manipulation is done to an individual task:
        this.deleteC.deleted = false;
    }
 }