/// <reference types="svelte" />
/// <reference types="vite/client" />

// Reduces editor noise for HTML attributes in Svelte components
declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    [key: string]: any;
  }
}
