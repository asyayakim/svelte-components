<script lang="ts">
  import Button from './components/Button.svelte';
    import Card from './components/card/Card.svelte';
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
  <Button variant="primary" size="md" on:click={toggleTheme}>
    {#if $theme === 'dark'}
      Dark Mode
    {:else}
      Light Mode
    {/if}
  </Button>
   <Button variant="secondary" size="md" on:click={() => console.log('primary clicked')}>
      Secondary
    </Button>
   <Button variant="tertiary" size="md" on:click={() => console.log('primary clicked')}>
      tertiary
    </Button>
<Card title="Sample Card" subtitle="This is a subtitle" elev="md" bordered={true} compact={false} ariaLabel="Sample Card">
    <p>This is some sample content inside the card.</p>
    <slot name="actions">
      <Button variant="primary" size="sm" on:click={() => console.log('Action clicked')}>
        Action
      </Button>
    </slot>
    <slot name="footer">
      <p class="text-sm text-[var(--text-muted)]">This is the footer content.</p>
    </slot>
  </Card>



</div>