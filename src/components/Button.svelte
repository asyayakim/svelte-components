<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { theme } from '../stores/theme';
  
  export let text: string = 'Button';
  export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  export let disabled: boolean = false;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let toggleThemeButton: boolean = false; 

  const dispatch = createEventDispatcher();

  $: currentTheme = $theme;

  function handleClick(e: MouseEvent) {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (toggleThemeButton) {
      theme.update(t => t === 'dark' ? 'light' : 'dark');
    }

    dispatch('click', { originalEvent: e });
  }

  
  $: buttonClass = `
    px-4 py-2 rounded font-medium transition
    ${variant === 'primary' ? (currentTheme === 'dark' ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-blue-500 text-white hover:bg-blue-600') : ''}
    ${variant === 'secondary' ? (currentTheme === 'dark' ? 'bg-blue-800 text-white hover:bg-blue-900 ' : 'bg-green-500 text-white hover:bg-green-600') : ''}
    ${variant === 'tertiary' ? (currentTheme === 'dark' ? 'bg-transparent text-blue-300 hover:bg-blue-900' : 'bg-transparent text-blue-500 hover:bg-blue-100') : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;
</script>

<button
  type={type}
  class={buttonClass}
  disabled={disabled}
  on:click={handleClick}
  {...$$restProps}
>
  <slot>{text}</slot>
</button>
