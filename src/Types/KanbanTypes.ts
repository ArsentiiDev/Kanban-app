export interface kanbanBoards {
    id: String,
    columns: [
        id: Number,
        title: String,
        tasks: [
            id:Number,
            title: String,
            description: String,
            subtasks: [
                id: Number,
                title: String,
                isDone: Boolean
            ]
        ]
    ]
}
