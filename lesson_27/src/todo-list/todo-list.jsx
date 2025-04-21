import { TodoItem } from './todo-item'

export const TodoList = ({ tasks, toggleCompleted, removeTask }) => {
    return (
        <ul className="w-full space-y-4">
            {tasks.map((task) => {
                return (
                    <TodoItem
                        key={task.id}
                        task={task}
                        toggleCompleted={toggleCompleted}
                        removeTask={removeTask}
                    />
                )
            })}
        </ul>
    )
}
