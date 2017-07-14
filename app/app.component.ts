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
    // always use private properties so that nothing outside can modify it unless must remove:
    private tasks = [
        new Task(
            "Buy a monkey",
            false
        ),
        new Task(
            "Sell a wrench",
            false
        )

    ]
    // ensure only strings are stored to this var:
    private str: string;
 }