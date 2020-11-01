<?php

namespace App\Http\Controllers;

use App\Models\Administrador;
use Illuminate\Support\Facades\Validator;
use App\Models\Cuenta;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Models\Estudiante;
use Illuminate\Support\Facades\DB;

class CuentaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cuentas = Cuenta::join('cuenta_rol', 'cuenta.cuenta_id', '=', 'cuenta_rol.cuenta_id')
            ->join('rol', 'rol.rol_id', '=', 'cuenta_rol.rol_id')
            ->select('cuenta.cuenta_id', 'cuenta_nombre_usuario', 'cuenta_correo', 'cuenta_nombre', 'cuenta_apellido_paterno', 'cuenta_apellido_materno', 'rol_nombre')
            ->orderBy('cuenta_id')
            ->get();
        return $cuentas;
    }

    /**
     * Crear un estudiante en el sistema.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function crearEstudiante(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cuenta_nombre_usuario' => 'required|unique:cuenta',
            'cuenta_correo' => 'required|email|max:100',
            'contraseña' => 'required|min:6',
            'cuenta_telefono' => 'required|string|size:10',
            'cuenta_nombre' => 'required|string',
            'cuenta_apellido_paterno' => 'required|string',
            'cuenta_apellido_materno' => 'required|string',
            'cuenta_genero' => 'required|string'
        ]);
        /**
         * Revisar que el correo no exista ya
         */
        if ($this->validarEmail($request) == 1) {
            return response()->json([
                'message' => 'Correo duplicado',
                'flag' => 0,
            ], 202);
        } else {
            if ($this->validarNombreUsuario($request) == 1) {
                return response()->json([
                    'message' => 'Nombre de usuario existente',
                    'flag' => 0,
                ], 202);
            } else {
                DB::beginTransaction();
                try {

                    /**
                     * Crear una cuenta en el sistema
                     */
                    $cuenta = Cuenta::create(array_merge(
                        $validator->validated(),
                        ['contraseña' => bcrypt($request->password)]
                    ));
                    $rolId = $request->rol_id;
                    $cuenta->roles()->attach($rolId);
                    /**
                     * Crear un estudiante en el sistema
                     */
                    $cuenta = Cuenta::where('cuenta_correo', $request->cuenta_correo)->first();

                    $estudiante = new Estudiante();
                    $estudiante->estudiante_carrera = $request->estudiante_carrera;
                    $estudiante->estudiante_semestre = $request->estudiante_semestre;
                    $estudiante->estudiante_calificacion = $request->estudiante_calificacion;
                    $estudiante->asesor_calificacion = $request->asesor_calificacion;

                    if ($cuenta->estudiante()->save($estudiante)) {
                        DB::commit();
                        return response()->json([
                            'message' => 'Registrado con exito',
                            'flag' => 1,
                            'cuenta' => $cuenta
                        ], 201);
                    }
                } catch (QueryException $err) {
                    DB::rollBack();
                    return response()->json([
                        'message' => 'Error al registrar usuario',
                        'flag' => 0,
                    ], 202);
                }
            }
        }
    }

    /**
     * Crear un administrador en el sistema.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function crearAdministrador(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cuenta_nombre_usuario' => 'required|unique:cuenta',
            'cuenta_correo' => 'required|email|max:100',
            'contraseña' => 'required|min:6',
            'cuenta_telefono' => 'required|string|size:10',
            'cuenta_nombre' => 'required|string',
            'cuenta_apellido_paterno' => 'required|string',
            'cuenta_apellido_materno' => 'required|string',
            'cuenta_genero' => 'required|string'
        ]);
        /**
         * Revisar que el correo no exista ya
         */
        if ($this->validarEmail($request) == 1) {
            return response()->json([
                'message' => 'Correo duplicado',
                'flag' => 0,
            ], 202);
        } else {
            if ($this->validarNombreUsuario($request) == 1) {
                return response()->json([
                    'message' => 'Nombre de usuario existente',
                    'flag' => 0,
                ], 202);
            } else {
                DB::beginTransaction();
                try {

                    /**
                     * Crear una cuenta en el sistema
                     */
                    $cuenta = Cuenta::create(array_merge(
                        $validator->validated(),
                        ['contraseña' => bcrypt($request->password)]
                    ));
                    $rolId = 3;
                    $cuenta->roles()->attach($rolId);
                    /**
                     * Crear un estudiante en el sistema
                     */
                    $cuenta = Cuenta::where('cuenta_correo', $request->cuenta_correo)->first();

                    $administrador = new Administrador();
                    $administrador->administrador_ocupacion = $request->administrador_ocupacion;
                
                    if ($cuenta->administrador()->save($administrador)) {
                        DB::commit();
                        return response()->json([
                            'message' => 'Registrado con exito',
                            'flag' => 1,
                            'cuenta' => $cuenta
                        ], 201);
                    }
                } catch (QueryException $err) {
                    DB::rollBack();
                    return response()->json([
                        'message' => 'Error al registrar usuario',
                        'flag' => 0,
                    ], 202);
                }
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function show($cuenta)
    {
        $cuentas = Cuenta::join('cuenta_rol', 'cuenta.cuenta_id', '=', 'cuenta_rol.cuenta_id')
            ->join('rol', 'rol.rol_id', '=', 'cuenta_rol.rol_id')
            ->select('cuenta.cuenta_id', 'cuenta_nombre_usuario', 'cuenta_correo', 'cuenta_nombre', 'cuenta_apellido_paterno', 'cuenta_apellido_materno', 'rol_nombre')
            ->get();
        return $cuentas;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cuenta $cuenta)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cuenta $cuenta)
    {
    }
    public function validarEmail(Request $request)
    {

        return Cuenta::where('cuenta_correo', $request->cuenta_correo)->exists();
    }
    public function validarNombreUsuario(Request $request)
    {

        return Cuenta::where('cuenta_nombre_usuario', $request->cuenta_nombre_usuario)->exists();
    }
}
