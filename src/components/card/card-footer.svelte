<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { WithElementRef } from 'bits-ui';
    import { cn } from '../../utils/classnames';

  let { class: classname, 
    children, ...restProps }
    : WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<footer class={cn(`text-sm text-[var(--text-muted)]`, classname)} {...restProps}>
  {@render children?.()}
</footer>