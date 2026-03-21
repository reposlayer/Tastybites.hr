import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import fs from 'fs';
import path from 'path';

try {
  const oldPath = path.resolve('gallery');
  const newPath = path.resolve('public/gallery');
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log('Moved gallery folder to public/gallery');
  }
} catch (err) {
  console.error('Error moving gallery folder:', err);
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
});