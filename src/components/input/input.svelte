<script lang="ts">
    import { cn } from '../../utils/classNames';
    
    </script>
    {#if }
    <input bind:this={ref}
      class={cn(buttonVariants({ variant, size }), classNames)}
      {disabled}
      {type}
      {...restProps}
    />
        
    {/if}