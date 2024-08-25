/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_KEY: string;
  // 他の環境変数をここに追加
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
