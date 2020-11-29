<?php

namespace App\Http\Controllers;

use App\Models\Cuenta;
use Illuminate\Support\Facades\Validator;
use App\Models\Estudiante;
use App\Models\Rol;
use Illuminate\Http\Request;


class EstudianteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Estudiantes = Cuenta::join('estudiante', 'cuenta.cuenta_id', '=', 'estudiante.cuenta_id_estudiante')
        ->join('rol', 'cuenta.rol_id', '=', 'rol.rol_id')
        ->select ('cuenta.cuenta_nombre','cuenta.cuenta_apellido_paterno','cuenta.cuenta_apellido_materno','rol.rol_nombre')
        ->where('rol.rol_nombre','=','Estudiante')
        ->orderBy('estudiante_id')
        ->get();
    return $Estudiantes->count();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'cuenta_correo' => 'required|string|email|max:255',
            'estudiante_semestre' => 'required|string',
            'estudiante_carrera' => 'required|string',
            'estudiante_calificacion' => 'required',
            'asesor_calificacion' => 'required'

        ]);

        $cuenta = Cuenta::where('cuenta_correo', $request->cuenta_correo)->first();

        $estudiante = new Estudiante($validator->validate());

        if ($cuenta->estudiante()->save($estudiante)) {
            return response()->json(['message' => 'Address Saved', 'data' => $estudiante], 200);
        }
        return response()->json(['message' => 'Failed', 'data' => null], 400);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Estudiante  $estudiante
     * @return \Illuminate\Http\Response
     */
    public function show(Estudiante $estudiante)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Estudiante  $estudiante
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Estudiante $estudiante)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Estudiante  $estudiante
     * @return \Illuminate\Http\Response
     */
    public function destroy(Estudiante $estudiante)
    {
        //
    }
}
