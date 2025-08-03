const TASKS_KEY = 'tasks';
const THEME_KEY = 'theme';

export function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export function loadTasks() {
  try {
    const data = localStorage.getItem(TASKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading tasks from local storage:', error);
    return [];
  }
}

export function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function loadTheme() {
  return localStorage.getItem(THEME_KEY) || 'dark'; 
}