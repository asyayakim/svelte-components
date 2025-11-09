<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '../../stores/theme';

  export let title: string | null = null;
  export let subtitle: string | null = null;
  export let elev: 'none' | 'sm' | 'md' | 'lg' = 'md';
  export let bordered: boolean = false;
  export let compact: boolean = false;
  export let ariaLabel: string | null = null;

  // keep data-theme synced
  onMount(() => document.documentElement.setAttribute('data-theme', $theme));
  $: document.documentElement.setAttribute('data-theme', $theme);
</script>

<article
  role="article"
  aria-label={ariaLabel ?? title ?? 'Card'}
  class="rounded-lg text-[var(--text-strong)] bg-panel transition-transform"
  class:border={bordered}
  class:border-[var(--muted-border)]={bordered}
  class:p-3={compact}
  class:p-5={!compact}
  class:shadow-sm={elev === 'sm'}
  class:shadow={elev === 'md'}
  class:shadow-lg={elev === 'lg'}
>
  {#if $$slots.header || title}
    <header class="flex items-start gap-3 mb-3">
      {#if $$slots.image}
        <div class="flex-shrink-0">
          <slot name="image" />
        </div>
      {/if}

      <div class="min-w-0">
        {#if $$slots.header}
          <slot name="header" />
        {:else if title}
          <h3 class="text-lg font-semibold leading-tight truncate">{title}</h3>
          {#if subtitle}
            <p class="text-sm text-[var(--text-muted)] truncate">{subtitle}</p>
          {/if}
        {/if}
      </div>
    </header>
  {/if}

  <div class="mb-4 text-[var(--text-strong)]">
    <slot />
  </div>

  {#if $$slots.actions || $$slots.footer}
    <div class="flex items-center justify-between gap-3 pt-3 border-t border-[var(--muted-border)]">
      <div>
        <slot name="actions" />
      </div>
      <div class="text-sm text-[var(--text-muted)]">
        <slot name="footer" />
      </div>
    </div>
  {/if}
</article>
