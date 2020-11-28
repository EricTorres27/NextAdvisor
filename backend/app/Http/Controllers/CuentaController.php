<?php

namespace App\Http\Controllers;

use App\Models\Administrador;
use Illuminate\Support\Facades\Validator;
use App\Models\Cuenta;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Models\Estudiante;
use App\Models\Rol;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class CuentaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cuentas = Cuenta::join('rol', 'cuenta.rol_id', '=', 'rol.rol_id')
            ->select('cuenta.cuenta_id', 'cuenta_nombre_usuario', 'cuenta_correo', 'cuenta_nombre', 'cuenta_apellido_paterno', 'cuenta_apellido_materno', 'rol_nombre')
            ->orderBy('cuenta_id')
            ->get();
        return $cuentas;
    }

    public function perfil(int $cuentaId)
    {
        $cuenta = Cuenta::join('estudiante', 'estudiante.cuenta_id_estudiante', '=', 'cuenta.cuenta_id')
            ->where('cuenta.cuenta_id', '=', $cuentaId)
            ->select('cuenta.cuenta_id', 'cuenta_nombre_usuario', 'cuenta_correo', 'cuenta_nombre', 'cuenta_apellido_paterno', 'cuenta_apellido_materno', 'estudiante_carrera', 'estudiante_semestre')
            ->get();
        return $cuenta;
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
            'password' => 'required|min:6',
            'cuenta_telefono' => 'required|string|size:10',
            'cuenta_nombre' => 'required|string',
            'cuenta_apellido_paterno' => 'required|string',
            'cuenta_apellido_materno' => 'required|string',
            'cuenta_genero' => 'required|string',
            'rol_id' => 'required'
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
                        ['password' => bcrypt($request->password)]
                    ));
                    /**
                     * Crear un estudiante en el sistema
                     */
                    $cuenta = Cuenta::where('cuenta_correo', $request->cuenta_correo)->first();

                    $estudiante = new Estudiante();
                    $estudiante->estudiante_carrera = $request->estudiante_carrera;
                    $estudiante->estudiante_semestre = $request->estudiante_semestre;
                    $estudiante->estudiante_calificacion = $request->estudiante_calificacion;

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
            'password' => 'required|min:6',
            'cuenta_telefono' => 'required|string|size:10',
            'cuenta_nombre' => 'required|string',
            'cuenta_apellido_paterno' => 'required|string',
            'cuenta_apellido_materno' => 'required|string',
            'cuenta_genero' => 'required|string',
            'rol_id' => 'required'
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
                        ['password' => bcrypt($request->password)]
                    ));
                    /**
                     * Crear un administrador en el sistema
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

    public function actualizarCuenta(Request $request, int $idCuenta)
    {
        DB::beginTransaction();
        try {
            $cuenta = Cuenta::find($idCuenta);
            $cuenta->cuenta_nombre =$request->input('cuenta_nombre');
            $cuenta->cuenta_nombre_usuario =$request->input('cuenta_nombre_usuario');
            $cuenta->cuenta_telefono=$request->input('cuenta_telefono');
            $cuenta->cuenta_correo=$request->input('cuenta_correo');
            $cuenta->cuenta_apellido_paterno=$request->input('cuenta_apellido_paterno');
            $cuenta->cuenta_apellido_materno=$request->input('cuenta_apellido_materno');
            $cuenta->cuenta_genero=$request->input('cuenta_genero');
            $cuenta->rol_id=$request->input('rol_id');
            $cuenta->save();
            $estudiante= Estudiante::where('cuenta_id_estudiante','=',$idCuenta)->first();
            $estudiante->estudiante_carrera =$request->input('estudiante_carrera');
            $estudiante->estudiante_semestre =$request->input('estudiante_semestre');
            $cuenta->estudiante()->save($estudiante);
            DB::commit();
            return response()->json([
                'message' => 'Pregunta actualizada con exito',
                'flag' => 1
            ], 201);
        } catch (QueryException $err) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error al actualizar pregunta',
                'flag' => 0,
            ], 202);
        }
    }

    public function eliminarUsuario(int $idCuenta)
    {
        DB::beginTransaction();
        try {
            Cuenta::where('cuenta_id', $idCuenta)->delete();
            DB::commit();
            return response()->json([
                'message' => 'Usuario eliminado con exito',
                'flag' => 1
            ], 201);
        } catch (QueryException $err) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error al eliminar usuario',
                'flag' => 0,
            ], 202);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function obtenerCuenta(int $cuentaId)
    {
        $cuenta=Cuenta::join('estudiante', 'cuenta.cuenta_id', '=', 'estudiante.cuenta_id_estudiante')
        ->where('cuenta_id','=',$cuentaId)->first();
        return $cuenta;
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
