import { writable } from 'svelte/store';

const initial = typeof localStorage !== 'undefined'
  ? localStorage.getItem('theme') || 'light'
  : 'light';

export const theme = writable<string>(initial);

theme.subscribe((value) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', value);
  }
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', value);
  }
});
