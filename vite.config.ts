import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const inlineEntryCss = {
  name: 'inline-entry-css',
  transformIndexHtml: {
    order: 'post' as const,
    handler(html: string, context: { bundle?: Record<string, unknown> }) {
      const bundle = context.bundle;
      if (!bundle) return html;

      return html.replace(
        /<link rel="stylesheet" crossorigin href="\/(assets\/[^\"]+\.css)">/g,
        (tag, fileName: string) => {
          const asset = bundle[fileName] as
            | { type: 'asset'; source: string | Uint8Array }
            | undefined;

          if (asset?.type !== 'asset' || typeof asset.source !== 'string') {
            return tag;
          }

          delete bundle[fileName];
          return `<style>${asset.source}</style>`;
        },
      );
    },
  },
};

export default defineConfig({
  plugins: [react(), inlineEntryCss],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
  },
});
