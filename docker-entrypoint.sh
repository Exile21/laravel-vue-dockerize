#!/bin/bash

# Install dependencies
composer install
npm install

# Start Vite in background
npm run dev &

# Start PHP-FPM
php-fpm
