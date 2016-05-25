import {Component, Input} from "angular2/core";

import {TaskRepository} from "../../../model/TaskRepository";
import {Router, RouteParams} from "angular2/router";
import {Task} from "../../../model/Task";

@Component({
    template: require('./../../../view/todo/view.template.html'),
})
export class ViewAction
{
    private task: Task;

    constructor(private model: TaskRepository, private router: Router, private params: RouteParams) {
        this.task = model.getTaskById(parseInt(params.get('id'), 10));
    }

    back() {
        this.router.navigate(['/TODO/Index']);
    }
}