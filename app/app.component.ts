import { Component } from '@angular/core';

// create task component:
import { Task } from "./model/task";

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
    // ensure only strings are stored to this var:
        // intialize the object to allow browser users to create new tasks::
    private currentTask = new Task(null, false);
    // run this method when a task is added:
    addTask(){
        // temp var for storing current data to be added to the list:
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        // clear text after an event is added:
        this.currentTask.content = null;
    }
 }