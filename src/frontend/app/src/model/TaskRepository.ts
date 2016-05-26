import {Task} from "./Task";

export class TaskRepository
{
    static LAST_TASK_ID = 0;

    private tasks: TaskList = {};

    constructor() {
        for(let n = 1; n <= 10; n++) {
            this.createTask(`Task ${n}`, `Demo Task ${n}`);
        }
    }

    public createTask(title: string, description: string) {
        let task = new Task(title, description);

        this.tasks[task.id] = task;
    }

    public updateTask(taskId: number, title: string, description: string) {
        this.tasks[taskId].title = title;
        this.tasks[taskId].description = description;
    }

    public deleteTask(taskId: number) {
        if(!this.tasks.hasOwnProperty(taskId.toString())) {
            throw new Error('Not found');
        }

        delete this.tasks[taskId];
    }

    public getTaskById(taskId: number): Task {
        if(!this.tasks.hasOwnProperty(taskId.toString())) {
            throw new Error('Not found');
        }

        return this.tasks[taskId];
    }

    public getAll(): Task[] {
        let result = [];

        for(let n in this.tasks) {
            if(this.tasks.hasOwnProperty(n)) {
                result.push(this.tasks[n]);
            }
        }

        return result;
    }
}

interface TaskList { [id: number]: Task }