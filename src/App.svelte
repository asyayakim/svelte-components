<script lang="ts">
  import Button from './components/Button.svelte';
  import Card from './components/card/Card.svelte';
  import CardImage from './components/card/CardImage.svelte';
  import CardHeader from './components/card/CardHeader.svelte';
  import CardBody from './components/card/CardBody.svelte';
  import CardFooter from './components/card/CardFooter.svelte';
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
     <CardImage src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" alt="landscape" size="thumb" />

    <CardHeader title="Project Aurora" subtitle="Design system" badge="Badge" />

    <CardBody>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </CardBody>

    <CardFooter>footer</CardFooter>
  </Card>



</div>