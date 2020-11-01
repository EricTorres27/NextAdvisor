<?php

use App\Http\Controllers\CuentaController;
use App\Http\Controllers\EstudianteController;
use App\Http\Controllers\MateriaController;
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
Route::group([
    'middleware' => 'api',
    'prefix' => 'cuenta'
], function ($router){
    Route::post('crearEstudiante', [CuentaController::class, 'crearEstudiante']);
    Route::post('crearAdministrador', [CuentaController::class, 'crearAdministrador']);
    Route::get('listarCuentas', [CuentaController::class, 'index']);
});
Route::resource('materia',MateriaController::class);
Route::resource('cuenta',CuentaController::class);
Route::resource('estudiante',EstudianteController::class);
