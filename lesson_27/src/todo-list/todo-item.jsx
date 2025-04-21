export const TodoItem = ({ task, toggleCompleted, removeTask }) => {
    return (
        <li
            key={task.id}
            className="flex items-center justify-between border px-3 py-2 rounded-md">
            <input
                onChange={() => toggleCompleted(task.id)}
                type="checkbox"
                checked={task.completed}
            />
            <span>{task.name}</span>
            <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeTask(task.id)}>
                X
            </button>
        </li>
    )
}
