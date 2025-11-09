<script lang="ts">
  export let className = '';
</script>

<div class={`text-sm text-[var(--text-muted)] ${className}`}>
  <slot />
</div>
