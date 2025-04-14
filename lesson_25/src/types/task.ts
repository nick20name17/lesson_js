export interface Task {
    id: number
    text: string
    completed: boolean
}

export type Filters = 'all' | 'completed' | 'not-completed'
