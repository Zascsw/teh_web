import { flow, types } from "mobx-state-tree";
import axios from "axios";

const Task = types.model({
    id: types.identifier,
    name: types.string,
    completed: types.boolean,
});

const TaskStore = types
    .model({
        tasks: types.array(Task),
    })
    .views((self) => ({
        get completedTasks() {
            return self.tasks.filter((task) => task.completed === true);
        },
    }))
    .actions((self) => ({
        addTask(name: string) {
            const newTask = Task.create({
                id: Math.random().toString(36).substr(2, 9),
                name: name,
                completed: false,
            });
            self.tasks.push(newTask);
        },
        toggleTaskCompletion(taskId: string) {
            const task = self.tasks.find((task) => task.id === taskId);
            // @ts-ignore
            task.completed = !task.completed;
        },
        setTasks(tasks: any) {
            self.tasks = tasks;
        },
    }))
    .actions((self) => ({
        fetchTasks: flow(function* () {
            try {
                const response = yield axios.get("https://jsonplaceholder.typicode.com/todos");
                taskStore.setTasks(response.data);
            } catch (error) {
                console.log("Error while fetching tasks: ", error);
            }
        }),
    }));

const taskStore = TaskStore.create({
    tasks: [],
});

export default taskStore;
