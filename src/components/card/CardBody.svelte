<script lang="ts">
  export let className = '';
</script>

<div class={`prose max-w-none ${className}`}>
  <slot />
</div>
