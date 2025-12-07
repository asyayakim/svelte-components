<script module lang="ts">
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  export const buttonVariants = tv({
    base: 'inline-flex items-center justify-center gap-2 font-semibold rounded-[var(--control-radius)] transition-transform transition-colors ease-in-out focus:outline-none focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--accent-primary),transparent,16%)]',
    variants: {
      variant: {
        default: '',
        primary: 'bg-[var(--accent-primary)] text-[var(--accent-primary-on)] shadow-[0_8px_26px_color-mix(in_srgb,var(--accent-primary)_10%,transparent)] hover:bg-[var(--accent-primary-hover)] active:bg-[var(--accent-primary-active)]',
        secondary: 'bg-[var(--accent-secondary)] text-[var(--accent-secondary-on)] shadow-[0_8px_20px_color-mix(in_srgb,var(--accent-secondary)_8%,transparent)] hover:bg-[var(--accent-secondary-hover)]',
        tertiary: 'bg-transparent text-[var(--accent-primary)] border border-[var(--muted-border)] hover:bg-[color-mix(in_srgb,var(--accent-primary)_6%,transparent)]'
      },
      size: {
        default: 'px-4 py-2 text-base',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg'
      },
      disabled: {
        true: 'opacity-60 pointer-events-none cursor-not-allowed',
        false: 'hover:-translate-y-[2px] active:translate-y-0'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false
    }
  });

  export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
    export type ButtonSize = VariantProps<typeof buttonVariants>['size'];
  
    export type ButtonProps = WithElementRef<HTMLButtonAttributes> & 
      WithElementRef<HTMLAnchorAttributes> & {
      variant?: ButtonVariant;
      size?: ButtonSize;
    }
  </script>
  
<script lang="ts">
  import { cn } from '../../utils/classNames';

  let {
    class: classNames,
    variant = 'primary',
    href = undefined,
    ref = $bindable(null),
    size = 'default',
    disabled = false,
    type = 'button',
 children,
    ...restProps
  }: ButtonProps = $props()
</script>
{#if href}
<a bind:this={ref} class={cn(buttonVariants({ variant, size }), classNames)} {href} {...restProps}>
  {@render children?.()}
</a>
{:else}

<button bind:this={ref}
  class={cn(buttonVariants({ variant, size }), classNames)}
  {disabled}
  {type}
  {...restProps}
>
 {@render children?.()}
</button>
{/if}
