export interface subtasks {
    id: number,
    title: string,
    isDone: Boolean
}

export interface tasks {
        id:number,
        title: string,
        description: string,
        subtasks: subtasks[]
}

export interface columns {
        id: number,
        title: string,
        tasks: tasks[]
}

export interface kanbanBoards {
    id: string,
    columns: columns[]
}

