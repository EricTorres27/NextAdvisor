<?php

namespace App\Http\Controllers;

use App\Models\Administrador;
use App\Models\Rol;
use App\Models\Cuenta;
use Illuminate\Http\Request;

class AdministradorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Asesores = Cuenta::join('estudiante', 'cuenta.cuenta_id', '=', 'estudiante.cuenta_id_estudiante')
            ->join('rol', 'cuenta.rol_id', '=', 'rol.rol_id')
            ->select ('cuenta.cuenta_nombre','cuenta.cuenta_apellido_paterno','cuenta.cuenta_apellido_materno','rol.rol_nombre')
            ->where('rol.rol_nombre','=','Asesor')
            ->orderBy('estudiante_id')
            ->get();
        return $Asesores->count();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Administrador  $administrador
     * @return \Illuminate\Http\Response
     */
    public function show(Administrador $administrador)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Administrador  $administrador
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Administrador $administrador)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Administrador  $administrador
     * @return \Illuminate\Http\Response
     */
    public function destroy(Administrador $administrador)
    {
        //
    }
}
