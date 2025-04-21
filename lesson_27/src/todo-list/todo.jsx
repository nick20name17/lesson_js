import { TodoForm } from './todo-form'
import { TodoList } from './todo-list'
import { useTasks } from './use-tasks'

export const Todo = () => {
    const { addTask, toggleCompleted, removeTask, tasks } = useTasks()

    return (
        <div className="h-screen flex items-center justify-center flex-col gap-10">
            <div className="w-100 space-y-10">
                <TodoForm addTask={addTask} />
                <TodoList
                    tasks={tasks}
                    toggleCompleted={toggleCompleted}
                    removeTask={removeTask}
                />
            </div>
        </div>
    )
}
