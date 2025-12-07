<script lang="ts">
  import { Button } from './components/button';
  import CardImage from './components/card/card-image.svelte';
  import CardHeader from './components/card/card-header.svelte';
  import CardBody from './components/card/card-body.svelte';
  import CardFooter from './components/card/card-footer.svelte';
  import { theme } from './stores/theme';
  import { Container } from './components/container';
    import { Card } from './components/card';
  import { Badge } from './components/badge';

  export let globalClass: string = 'app-container';


function toggleTheme() {

  theme.update(t => {
    const next = t === 'dark' ? 'light' : 'dark';
    return next;
  });
}

</script>

<div class={globalClass} data-theme={$theme}>
  <Container>
  <Button variant="primary" size="default" onclick={toggleTheme}>
    {#if $theme === 'dark'}
      Dark Mode
    {:else}
      Light Mode
    {/if}
  </Button>
   <Button variant="secondary" size="md" onclick={() => console.log('primary clicked')}>
      Secondary
    </Button>
   <Button variant="tertiary" size="md" onclick={() => console.log('primary clicked')}>
      tertiary
    </Button>
    
    <Card class="my-6">
      <CardImage src="https://via.placeholder.com/150" alt="Placeholder Image" size="thumb" />
      <CardHeader class="font-bold text-lg">Card Title</CardHeader>
      <CardBody>
        <p>This is the body of the card. It can contain text, images, or other components.</p>
        <Badge variant="primary">New</Badge>
      </CardBody>
      <CardFooter>
        <p>Footer content goes here.</p>
      </CardFooter>
    </Card>
  </Container>

</div>