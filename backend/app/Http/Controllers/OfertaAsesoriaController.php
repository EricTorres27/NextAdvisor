<?php

namespace App\Http\Controllers;

use App\Models\OfertaAsesoria;
use App\Models\Materia;
use App\Models\Estudiante;
use App\Models\Cuenta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

class OfertaAsesoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ofertaAsesoria = OfertaAsesoria::join('estudiante','oferta_asesoria.estudiante_id', '=', 'estudiante.estudiante_id')
        ->join('materia','oferta_asesoria.materia_id', '=', 'materia.materia_id')
        ->select('oferta_asesoria.estudiante_id','materia_nombre','oferta_fecha')
        ->orderBy('oferta_fecha')
        ->get();
    

    return $ofertaAsesoria;
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
     * @param  \App\Models\OfertaAsesoria  $ofertaAsesoria
     * @return \Illuminate\Http\Response
     */
    public function show(OfertaAsesoria $ofertaAsesoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OfertaAsesoria  $ofertaAsesoria
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OfertaAsesoria $ofertaAsesoria)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OfertaAsesoria  $ofertaAsesoria
     * @return \Illuminate\Http\Response
     */
    public function destroy(OfertaAsesoria $ofertaAsesoria)
    {
        //
    }
}
