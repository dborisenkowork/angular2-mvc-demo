import {TaskRepository} from "./TaskRepository";

export class Task
{
    public id: number;
    public title: string;
    public description: string;

    constructor(title, description) {
        this.id = ++TaskRepository.LAST_TASK_ID;
        this.title = title;
        this.description = description;
    }
}