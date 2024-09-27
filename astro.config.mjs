import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [tailwind()],
    output: 'server', // Cambiar a 'server' o 'hybrid' para habilitar las rutas de API
    server: {
        port: 3000,
    },
});