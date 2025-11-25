<script lang="ts">
  export let className = '';
  export let label: string = '';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let variant: 'primary' | 'secondary' | 'neutral' = 'primary';
  export let rounded: 'sm' | 'md' | 'lg' = 'md';

  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-2',
    lg: 'text-lg px-4 py-3'
  };

  const radiusClasses = {
    sm: 'rounded-[var(--radius-sm)]',
    md: 'rounded-[var(--radius-md)]',
    lg: 'rounded-[var(--radius-lg)]'
  };
</script>

<div
  class="inline-flex items-center font-medium shadow-[var(--shadow-1)] transition-[var(--transition-fast)] {sizeClasses[size]} {radiusClasses[rounded]} {className}"
  data-variant="{variant}"
  role="status"
  aria-label={label}
>
  <slot>{label}</slot>
</div>

<style>
  div[data-variant='primary'] {
    background-color: var(--accent-primary);
    color: var(--accent-primary-on);
  }

  div[data-variant='secondary'] {
    background-color: var(--accent-secondary);
    color: var(--accent-secondary-on);
  }

  div[data-variant='neutral'] {
    background-color: var(--muted-background);
    color: var(--text-strong);
  }
</style>