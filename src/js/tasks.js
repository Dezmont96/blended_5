import { saveTasks, loadTasks } from './local-storage-api.js';
import { renderTasks } from './render-tasks.js';

let tasks = [];

export function initTasks() {
  tasks = loadTasks();
  // Цей виклик замінить статичні елементи в task-list.html на дані з localStorage
  renderTasks(tasks);
}

export function addTask(title, text) {
  const newTask = {
    id: Date.now(),
    title,
    text,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks(tasks);
}

export function deleteTask(taskId) {
  const id = Number(taskId);
  tasks = tasks.filter(task => task.id !== id);
  saveTasks(tasks);
  renderTasks(tasks);
}