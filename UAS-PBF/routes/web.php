<?php
 
use Illuminate\Support\Facades\Route;
 
Route::view('/mahasiswas', 'app');
Route::view('/mahasiswa/edit/{id}', 'app');
Route::view('/mahasiswa/{id}', 'app');
Route::view('/', 'app');
Route::view('/{path}', 'app');