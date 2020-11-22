<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => 'cors'], function () {

    Route::get('/v1/employees/{id?}', 'Employees@index');
    Route::post('/v1/employees', 'Employees@store');
    Route::post('/v1/employees/{id}', 'Employees@update');
    Route::delete('/v1/employees/{id}', 'Employees@destroy');
});
