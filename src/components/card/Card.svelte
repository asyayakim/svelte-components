<script lang="ts">
  import type {HTMLAttributes} from 'svelte/elements';
  import type {WithElementRef} from 'bits-ui';

let {
  class: classname,
  children,
  ...restProps
}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<article
  class={`card ${classname ?? ''}`}
  {...restProps}
>
  {@render children?.()}
</article>
