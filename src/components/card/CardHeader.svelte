<script lang="ts">
  export let title: string | null = null;
  export let subtitle: string | null = null;
  export let badge: string | null = null;
</script>

<div class="flex items-center justify-between gap-3 w-full">
  <div class="min-w-0">
    
    {#if title}<div class="text-base font-semibold truncate">{title}</div>{/if}
    {#if subtitle}<div class="text-sm text-[var(--text-muted)] truncate">{subtitle}</div>{/if}
  </div>

  {#if badge}
    <div class="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold bg-[var(--accent-secondary)] text-[var(--accent-secondary-on)]">
      {badge}
    </div>
  {/if}
</div>
