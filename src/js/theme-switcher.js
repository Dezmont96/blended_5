import { refs } from './refs.js';
import { saveTheme, loadTheme } from './local-storage-api.js';

function applyTheme(theme) {
  refs.body.classList.remove('theme-dark', 'theme-light');
  refs.body.classList.add(`theme-${theme}`);
}

export function onThemeToggle() {
  const isDark = refs.body.classList.contains('theme-dark');
  const newTheme = isDark ? 'light' : 'dark';
  
  applyTheme(newTheme);
  saveTheme(newTheme);
}

export function initTheme() {
  const savedTheme = loadTheme();
  applyTheme(savedTheme);
}