// Імпортуємо всі необхідні модулі
import { refs } from './js/refs.js';
import { initTasks, addTask, deleteTask } from './js/tasks.js';
import { onThemeToggle, initTheme } from './js/theme-switcher.js';

/**
 * Обробник події відправки форми.
 * @param {Event} event - Подія відправки.
 */
function onFormSubmit(event) {
  event.preventDefault();

  // Доступ до полів через 'elements' та їх атрибути 'name'
  const title = event.currentTarget.elements.taskName.value.trim();
  const text = event.currentTarget.elements.taskDescription.value.trim();

  // Перевірка на порожні поля
  if (!title || !text) {
    alert('Будь ласка, заповніть заголовок та опис завдання.');
    return;
  }

  // Додаємо нове завдання
  addTask(title, text);

  // Очищуємо форму після додавання
  event.currentTarget.reset();
}

/**
 * Обробник кліків на списку завдань для видалення.
 * @param {Event} event - Подія кліку.
 */
function onTaskListClick(event) {
  // Делегування подій: перевіряємо, чи клік був саме по кнопці "Delete"
  if (event.target.classList.contains('task-list-item-btn')) {
    // Знаходимо батьківський елемент 'li', щоб отримати його data-id
    const taskItem = event.target.closest('.task-list-item');
    if (taskItem) {
      deleteTask(taskItem.dataset.id);
    }
  }
}

// --- ІНІЦІАЛІЗАЦІЯ ДОДАТКУ ---

// Встановлюємо слухачів подій на відповідні елементи
refs.taskForm.addEventListener('submit', onFormSubmit);
refs.taskList.addEventListener('click', onTaskListClick);
refs.themeToggleButton.addEventListener('click', onThemeToggle);

// Ініціалізуємо тему та завдання при завантаженні сторінки
initTheme();
initTasks();