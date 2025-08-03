export function createTasksMarkup(tasks) {
  return tasks
    .map(
      ({ id, title, text }) => `
      <li class="task-list-item" data-id="${id}">
        <button class="task-list-item-btn">Delete</button>
        <h3>${title}</h3>
        <p>${text}</p>
      </li>
    `
    )
    .join('');
}
