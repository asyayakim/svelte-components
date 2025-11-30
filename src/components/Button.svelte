<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { theme } from '../stores/theme';
  import { onMount } from 'svelte';

  export let text: string = 'Button';
  export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  export let disabled: boolean = false;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let toggleThemeButton: boolean = false; 
  export let ariaLabel: string | null = null;
  export let size: 'sm' | 'md' | 'lg' = 'md';

  const dispatch = createEventDispatcher();

  onMount(() => {
    document.documentElement.setAttribute('data-theme', $theme);
  });
  $: document.documentElement.setAttribute('data-theme', $theme);

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

  const sizeMap = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg'
  };
  $: buttonClass = (() => {
    const base = [
      'inline-flex items-center justify-center gap-2 font-semibold rounded-[var(--control-radius)]',
      'transition-transform transition-colors ease-in-out',
      'focus:outline-none focus-visible:ring-4',
      'focus-visible:ring-[color-mix(in_srgb,var(--accent-primary),transparent,16%)]'
    ].join(' ');

    const sizeClass = sizeMap[size];

    const disabledClass = disabled
      ? 'opacity-60 pointer-events-none cursor-not-allowed'
      : 'hover:-translate-y-[2px] active:translate-y-0';

  
    let variantClass = '';

    switch (variant) {
      case 'primary':
        variantClass = [
          'bg-[var(--accent-primary)]',
          'text-[var(--accent-primary-on)]',
          'shadow-[0_8px_26px_color-mix(in_srgb,var(--accent-primary)_10%,transparent)]',
          'hover:bg-[var(--accent-primary-hover)]',
          'active:bg-[var(--accent-primary-active)]'
        ].join(' ');
        break;

      case 'secondary':
        variantClass = [
          'bg-[var(--accent-secondary)]',
          'text-[var(--accent-secondary-on)]',
          'shadow-[0_8px_20px_color-mix(in_srgb,var(--accent-secondary)_8%,transparent)]',
          'hover:bg-[var(--accent-secondary-hover)]'
        ].join(' ');
        break;

      case 'tertiary':
        variantClass = [
          'bg-transparent',
          'text-[var(--accent-primary)]',
          'border',
          'border-[var(--muted-border)]',
          'hover:bg-[color-mix(in_srgb,var(--accent-primary)_6%,transparent)]'
        ].join(' ');
        break;

      default:
        variantClass = 'bg-[var(--accent-primary)] text-[var(--accent-primary-on)]';
    }

    return [base, sizeClass, variantClass, disabledClass].join(' ');
  })();
</script>

<button
  type={type}
  class={buttonClass}
  on:click={handleClick}
  disabled={disabled}
  aria-label={ariaLabel}
  {...$$restProps}
>
  <!-- optional left icon slot -->
  <slot name="icon-left" />
  <span><slot>{text}</slot></span>
  <!-- optional right icon slot -->
  <slot name="icon-right" />
</button>

<style>
  /* Accessibility: remove transform on reduced motion */
  @media (prefers-reduced-motion: reduce) {
    :global(button) { transition: none !important; transform: none !important; }
  }
</style>
