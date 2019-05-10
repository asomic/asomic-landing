<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/politica-privacidad-ps', function () {
    return view('pp-purasangre');
});

Route::post('/enviado', 'MailController@sendmail')->name('ruta');

// Route::get('/prueba', function(){
//   Log::error('este es un error');
// });
