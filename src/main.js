import { refs } from './js/refs.js';
import { initTasks, addTask, deleteTask } from './js/tasks.js';
import { onThemeToggle, initTheme } from './js/theme-switcher.js';

function onFormSubmit(event) {
  event.preventDefault();

  const title = event.currentTarget.elements.taskName.value.trim();
  const text = event.currentTarget.elements.taskDescription.value.trim();

  if (!title || !text) {
    alert('Будь ласка, заповніть заголовок та опис завдання.');
    return;
  }

  addTask(title, text);

  event.currentTarget.reset();
}

function onTaskListClick(event) {
  if (event.target.classList.contains('task-list-item-btn')) {
    const taskItem = event.target.closest('.task-list-item');
    if (taskItem) {
      deleteTask(taskItem.dataset.id);
    }
  }
}

refs.taskForm.addEventListener('submit', onFormSubmit);
refs.taskList.addEventListener('click', onTaskListClick);
refs.themeToggleButton.addEventListener('click', onThemeToggle);

initTheme();
initTasks();