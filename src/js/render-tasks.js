import { refs } from './refs.js';
import { createTasksMarkup } from './markup-tasks.js';

export function renderTasks(tasks) {
  const markup = createTasksMarkup(tasks);
  refs.taskList.innerHTML = markup;
}