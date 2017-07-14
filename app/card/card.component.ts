import { Component, Input } from '@angular/core';

// create property to pass data to the task view:
import { Task } from '../model/task';

@Component({
    // Meta Data:
        // sets the common path for pointing to files (ex: templateUrl, see the tsconfig.json for common.js)
            moduleId: module.id,
        // selector specifies names you want to use when this is called in other components
            selector: 'app-card',
        // html elements of the component
            templateUrl: 'card.component.html',
        // use "Urls" to pull in stylesheets from a separate file
            styleUrls: [ 'card.component.css' ]

})
// allows this component to be used within other components
export class CardComponent {
    // enables you to pass data into the Task property:
    //     when data is passed, it will be expecting something called Task, which is defined in our model folder::
    @Input() task: Task;
}