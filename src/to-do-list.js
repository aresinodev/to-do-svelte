import { writable } from 'svelte/store';

if (!localStorage.getItem('to-do-svelte')) {
    localStorage.setItem('to-do-svelte', JSON.stringify([]));
}

export const list = writable(JSON.parse(localStorage.getItem('to-do-svelte')));
