<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let size: 'thumb' | 'banner' = 'thumb';
</script>

{#if size === 'thumb'}
  <div class="mr-3" >
    <img src={src} alt={alt} loading="lazy" class="w-12 h-12 object-cover rounded-md" />
  </div>
{:else}
  <div class="w-full mb-3 -mx-5 px-5">
    <img src={src} alt={alt} loading="lazy" class="w-full h-auto object-cover rounded-md" />
  </div>
{/if}
