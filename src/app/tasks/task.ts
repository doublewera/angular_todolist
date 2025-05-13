export class Task {
    static task_count = 0;
    #id: number = 0;
    #name: string = "Nothing to do";
    #isComplete: boolean = false;
    get id () {
        return this.#id;
    }
    get name () {
        return this.#name;
    }
    get complete () {
        return this.#isComplete;
    }
    constructor (
        name:string) {
        this.#id = Task.task_count;
        Task.task_count ++;
        this.#name = name;
    }
    toggleTaskState() {
        this.#isComplete = !this.#isComplete;
    }
}
