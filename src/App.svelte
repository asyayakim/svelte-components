<script lang="ts">
  import Button from './components/Button.svelte';
  import { theme } from './stores/theme';

  export let globalClass: string = 'app-container';


function toggleTheme() {

  theme.update(t => {
    const next = t === 'dark' ? 'light' : 'dark';
    return next;
  });
}

</script>

<div class={globalClass} data-theme={$theme}>
  <Button variant="primary" on:click={toggleTheme}>
    Toggle Theme
  </Button>
</div>