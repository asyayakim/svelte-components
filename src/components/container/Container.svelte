<script lang="ts">
  import type {HTMLAttributes} from 'svelte/elements';
  import type {WithElementRef} from 'bits-ui';
  import { cn } from '../../utils/classnames';
let {
  class: classname,
  children,
  ...restProps
}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>
 

<div class={cn("w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8", classname)} {...restProps}>
  {@render children?.()}
</div>
