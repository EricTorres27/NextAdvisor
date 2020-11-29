<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Cuenta;

class JWTAuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
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
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
    	$validator = Validator::make($request->all(), [
            'cuenta_correo' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token)
    {
        return response()->json([
            'status'=>'ok',
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
