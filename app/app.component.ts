import { Component } from '@angular/core';

// create task component:
import { Task } from "./model/task";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    // define task property:
    task1: Task = {
        // properties:
        content: "Learn to code",
        completed: false

    }
 }