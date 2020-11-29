<?php

namespace App\Http\Controllers;

use App\Models\Area;
use App\Models\Materia;
use Illuminate\Http\Request;

class AreaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
   
    }
    public function ambiente()
    {
    $ambiente = Materia::select ('materia_nombre','area_id')
        ->where('area_id','=', 1 )
        ->get();
    return $ambiente->count();
    }
    public function negocios()
    {
    $negocios = Materia::select ('materia_nombre','area_id')
        ->where('area_id','=', 2 )
        ->get();
    return $negocios->count();
    }
    public function ciencias()
    {
    $ciencias = Materia::select ('materia_nombre','area_id')
        ->where('area_id','=', 3 )
        ->get();
    return $ciencias->count();
    }

    public function creativos()
    {
    $creativos = Materia::select ('materia_nombre','area_id')
        ->where('area_id','=', 4 )
        ->get();
    return $creativos->count();
    }
    public function salud()
    {
    $salud = Materia::select ('materia_nombre','area_id')
        ->where('area_id','=', 5)
        ->get();
    return $salud->count();
    }
    public function ingenieria()
    {
    $ingenieria = Materia::select ('materia_nombre','area_id')
        ->where('area_id','=', 6 )
        ->get();
    return $ingenieria->count();
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
     * @param  \App\Models\Area  $area
     * @return \Illuminate\Http\Response
     */
    public function show(Area $area)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Area  $area
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Area $area)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Area  $area
     * @return \Illuminate\Http\Response
     */
    public function destroy(Area $area)
    {
        //
    }
}
