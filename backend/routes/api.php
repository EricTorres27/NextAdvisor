<?php

use App\Http\Controllers\CuentaController;
use App\Http\Controllers\EstudianteController;
use App\Http\Controllers\MateriaController;
use App\Http\Controllers\OfertaAsesoriaAsesorController;
use App\Http\Controllers\TarifaController;
use App\Http\Controllers\PreguntaController;
use App\Http\Controllers\JWTAuthController;
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
Route::group([
    'middleware' => 'api',
    'prefix' => 'cuenta'
], function ($router){
    Route::post('crearEstudiante', [CuentaController::class, 'crearEstudiante']);
    Route::post('crearAdministrador', [CuentaController::class, 'crearAdministrador']);
    Route::get('listarCuentas', [CuentaController::class, 'index']);
    Route::get('pruebaContraseña', [CuentaController::class, 'pruebaContraseña']);
    Route::get('obtenerCuenta/{cuentaId}', [CuentaController::class, 'obtenerCuenta']);
    Route::delete('eliminarUsuario/{idCuenta}', [CuentaController::class, 'eliminarUsuario']);
    Route::post('cuentaLogin', [CuentaController::class, 'cuentaLogin']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('register', [JWTAuthController::class, 'register']);
    Route::post('login', [JWTAuthController::class, 'login']);
    Route::post('logout', [JWTAuthController::class, 'logout']);
    Route::post('refresh', [JWTAuthController::class, 'refresh']);
    Route::get('profile', [JWTAuthController::class, 'profile']);
});

Route::resource('tarifa',TarifaController::class);
Route::resource('materia',MateriaController::class);
Route::resource('estudiante',EstudianteController::class);
Route::resource('pregunta',PreguntaController::class);


