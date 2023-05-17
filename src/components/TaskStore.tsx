// TaskStore.js

import { types, flow, IArrayType, IModelType, IMSTArray, ISimpleType, IStateTreeNode, _NotCustomized} from "mobx-state-tree";
import axios from "axios";

const Task = types.model({
    id: types.identifierNumber,
    name: types.string,
    completed: types.boolean
});

const TaskStore = types
    .model({
        tasks: types.array(Task),
        completedTasks: types.array(types.reference(Task))
    })
    .actions((self) => ({
        setTasks(tasks: IMSTArray<IModelType<{ id: ISimpleType<number>; name: ISimpleType<string>; completed: ISimpleType<boolean>; }, {}, _NotCustomized, _NotCustomized>> & IStateTreeNode<IArrayType<IModelType<{ id: ISimpleType<number>; name: ISimpleType<string>; completed: ISimpleType<boolean>; }, {}, _NotCustomized, _NotCustomized>>>) {
            self.tasks = tasks;
        },
        toggleTaskCompletion(id: number) {
            const task = self.tasks.find((task) => task.id === id);
            // @ts-ignore
            task.completed = !task.completed;

            // @ts-ignore
            if (task.completed) {
                // @ts-ignore
                self.completedTasks.push(task.id);
            } else {
                // @ts-ignore
                self.completedTasks.remove(task.id);
            }
        },
        addTask(name: string) {
            const id = Date.now();
            self.tasks.push({ id, name, completed: false });
        },
        fetchTasks: flow(function* () {
            const response = yield axios.get("https://jsonplaceholder.typicode.com/todos");
            const tasks = response.data.map((task: { id: any; title: any; completed: any; }) => ({
                id: task.id,
                name: task.title,
                completed: task.completed
            }));
            self.setTasks(tasks);
        })
    }));

const taskStore = TaskStore.create({
    tasks: [],
    completedTasks: []
});

export default taskStore;
