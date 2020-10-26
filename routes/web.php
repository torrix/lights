<?php

use App\Http\Controllers\Dashboard;
use App\Http\Controllers\Group;
use App\Http\Controllers\Light;
use Illuminate\Support\Facades\Route;

Route::get('/', [Dashboard::class, 'index']);
Route::get('/lights', [Light::class, 'status']);
Route::get('/lights/{id}/toggle', [Light::class, 'toggle']);
Route::get('/groups/{id}/toggle', [Group::class, 'toggle']);
Route::get('/lights/{id}/detail', [Light::class, 'detail']);
Route::get('/lights/{id}/set-colour', [Light::class, 'setColour']);
Route::get('/lights/{id}/set-brightness', [Light::class, 'setBrightness']);
Route::get('/lights/{id}/on', [Light::class, 'on']);
Route::get('/lights/{id}/off', [Light::class, 'off']);
