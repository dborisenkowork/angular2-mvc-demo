import {Component} from "angular2/core";

import {TaskRepository} from "../../../model/TaskRepository";
import {Router} from "angular2/router";
import {Task} from "../../../model/Task";

@Component({
    template: require('./../../../view/todo/add.template.html'),
})
export class AddAction
{
    title: string = '';
    description: string = '';

    constructor(private model: TaskRepository, private router: Router) {}

    submit() {
        this.model.createTask(this.title, this.description);
        this.router.navigate(['/TODO/Index']);
    }
}