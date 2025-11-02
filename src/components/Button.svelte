<script lang="ts">
  export let text: string = 'Button';
  export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  export let disabled: boolean = false;
  export let type: 'button' | 'submit' | 'reset' = 'button';

  function handleClick(e: MouseEvent) {
    if (disabled) {
      e.preventDefault();
      return;
    }
  
  }
</script>

<button
  type={type}
  class={`px-4 py-2 rounded font-medium transition
    ${variant === 'primary' ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
    ${variant === 'secondary' ? 'bg-gray-500 text-white hover:bg-gray-600' : ''}
    ${variant === 'tertiary' ? 'bg-transparent text-blue-500 hover:bg-blue-100' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  disabled={disabled}
  on:click={handleClick}
  {...$$restProps}
>
  <slot>{text}</slot>
</button>
