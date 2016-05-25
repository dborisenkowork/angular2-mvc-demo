import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

import {TaskRepository} from "../../../model/TaskRepository";

@Component({
    template: require('./../../../view/todo/index.template.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class IndexAction
{
    constructor(private model: TaskRepository, private router: Router) {}

    goEdit(taskId: number) {
        this.router.navigate(['/TODO/Edit', {id: taskId}]);
    }

    goDelete(taskId: number) {
        this.router.navigate(['/TODO/Delete', {id: taskId}]);
    }
}