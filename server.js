import express from 'express';
const app = express();

// обработчик GET-запросов на /api/tasks
app.get('/api/tasks', (req, res) => {
    const tasks = [
        { id: 1, name: 'Task 1', completed: false },
        { id: 2, name: 'Task 2', completed: true },
        { id: 3, name: 'Task 3', completed: false },
    ];
    res.json(tasks);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
