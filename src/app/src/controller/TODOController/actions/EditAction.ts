import {Component} from "angular2/core";

import {TaskRepository} from "../../../model/TaskRepository";
import {Router, RouteParams} from "angular2/router";
import {Task} from "../../../model/Task";

@Component({
    template: require('./../../../view/todo/edit.template.html'),
})
export class EditAction
{
    id: number;
    title: string = '';
    description: string = '';

    constructor(
        private model: TaskRepository,
        private params: RouteParams,
        private router: Router
    ) {
        let id = parseInt(params.get('id'), 10);
        let task = model.getTaskById(id);

        this.id = id;
        this.title = task.title;
        this.description = task.description;
    }

    submit() {
        this.model.updateTask(this.id, this.title, this.description);
        this.router.navigate(['/TODO/Index']);
    }
}