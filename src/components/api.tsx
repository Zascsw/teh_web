import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import taskStore from "./TaskStore";

const TaskList = () => {


    const { tasks, fetchTasks } = taskStore;

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>

            {tasks.map((task) => (

                <div key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => taskStore.toggleTaskCompletion(task.id)}
                    />
                    <span>{task.name}</span>
                </div>
            ))}
        </div>

    );
};

export default observer(TaskList);
