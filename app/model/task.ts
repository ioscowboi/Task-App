export class Task {
    constructor(
        public content: string,
        public completed: boolean
    ) { 
        // what should the constructor run every time a 'Task' class is created? Write here:
    }
}

// although this class does the same thing as Task, we need to keep track of them seperately:
export class deleteOrNah {
    constructor(
        public deleted: boolean
    ) { 
        // what should the constructor run every time a 'Task' class is created? Write here:
    }
}