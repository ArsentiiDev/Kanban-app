export interface subtasks {
    _id: string,
    title: string,
    isDone: Boolean
}

export interface tasks {
    _id:string,
    title: string,
    description: string,
    createdAt: Date,
    subtasks: subtasks[]
}

export interface columns {
    _id: string,
    title: string,
    tasks: tasks[]
}

export interface kanbanBoards {
    _id: string,
    title: string,
    columns: columns[]
}

