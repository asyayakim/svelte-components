<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { WithElementRef } from 'bits-ui';

  let { class: classname, 
    children, ...restProps }
    : WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<footer class={`text-sm text-[var(--text-muted)] ${classname ?? ''}`} {...restProps}>
  {@render children?.()}
</footer>