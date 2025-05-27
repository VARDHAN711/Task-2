// DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const themeToggle = document.getElementById('theme-toggle');

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Toggle Theme' : '🌙 Toggle Theme';
});

// Add Task
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <span>${taskText}</span>
        <button>Delete</button>
    `;

    // Mark as complete
    li.querySelector('span').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete task
    li.querySelector('button').addEventListener('click', () => {
        li.classList.add('pop-out');
        li.addEventListener('animationend', () => li.remove());
    });

    taskList.appendChild(li);
    taskInput.value = '';
}

// Ensure UI updates dynamically without page reload