<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { WithElementRef } from 'bits-ui';

  let { class: classname, 
    children, ...restProps }
    : WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<header class={`card-header ${classname ?? ''}`} {...restProps}>
  {@render children?.()}
</header>
