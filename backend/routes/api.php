<?php

use App\Http\Controllers\CuentaController;
use App\Http\Controllers\EstudianteController;
use App\Http\Controllers\MateriaController;
use App\Http\Controllers\OfertaAsesoriaAsesorController;
use Carbon\Factory;
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
Route::resource('asesoria',OfertaAsesoriaAsesorController::class);
Route::resource('materia',MateriaController::class);
Route::resource('cuenta',CuentaController::class);
Route::resource('estudiante',EstudianteController::class);

