// TaskList.js

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import taskStore from "./TaskStore";

const TaskList = observer(() => {
    const { tasks, fetchTasks } = taskStore;


    return (
        <div>
            <h1>My Tasks</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => taskStore.toggleTaskCompletion(task.id)}
                        />
                        {task.name}
                    </li>
                ))}
            </ul>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const name = (e.currentTarget.elements.item(
                        Number("taskName")
                    ) as HTMLInputElement).value;
                    taskStore.addTask(name);
                    e.currentTarget.reset();
                }}
            >
                <input type="text" name="taskName" placeholder="New Task" />
                <button type="submit">Add</button>
            </form>
            <p>Completed Tasks: {taskStore.completedTasks.length}</p>
        </div>
    );
});

export default TaskList;
