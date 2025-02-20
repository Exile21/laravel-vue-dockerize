import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        host: '0.0.0.0',
        hmr: {
            host: process.env.VITE_HOST || 'localhost',
            protocol: 'ws'
        },
        watch: {
            usePolling: true
        },
        port: process.env.VITE_PORT || 5173,
    },
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
