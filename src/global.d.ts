/// <reference types="svelte" />
/// <reference types="vite/client" />

// The following augmentation reduces editor/TS noise for HTML attributes
declare namespace svelte.JSX {
  // allow any valid HTML attributes and custom data-/aria- props
  interface HTMLAttributes<T> {
    [key: string]: any;
  }
}
