/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TENOR_API_KEY: string;
  readonly PUBLIC_TENOR_API_CLIENT_ID: string;
  readonly PUBLIC_API_NINJA_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
