<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');
Route::inertia('/about', 'About');
Route::inertia('/contact', 'Contact');
Route::inertia('/pricing', 'Pricing');