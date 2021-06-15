<?php
 
use Illuminate\Support\Facades\Route;
 
Route::get('/mahasiswas', 'MahasiswaController@index');
Route::post('/mahasiswa/store', 'MahasiswaController@store');
Route::get('/mahasiswa/edit/{id}', 'MahasiswaController@getMahasiswa');
Route::get('/mahasiswa/{id}', 'MahasiswaController@getMahasiswa');
Route::put('/mahasiswa/{id}', 'MahasiswaController@update');
Route::delete('/mahasiswa/delete/{id}', 'MahasiswaController@delete');
