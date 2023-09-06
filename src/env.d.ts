/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TENOR_API_KEY: string;
  readonly PUBLIC_TENOR_API_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
