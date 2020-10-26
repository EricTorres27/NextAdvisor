<?php

namespace App\Http\Controllers;

use App\Models\OfertaAsesoriaAsesor;
use Illuminate\Http\Request;

class OfertaAsesoriaAsesorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $asesor =  OfertaAsesoriaAsesor::all();
        return $asesor;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $oferta = OfertaAsesoriaAsesor::create($request->all());
        return $oferta;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OfertaAsesoriaAsesor  $ofertaAsesoriaAsesor
     * @return \Illuminate\Http\Response
     */
    public function show(OfertaAsesoriaAsesor $ofertaAsesoriaAsesor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OfertaAsesoriaAsesor  $ofertaAsesoriaAsesor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OfertaAsesoriaAsesor $ofertaAsesoriaAsesor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OfertaAsesoriaAsesor  $ofertaAsesoriaAsesor
     * @return \Illuminate\Http\Response
     */
    public function destroy(OfertaAsesoriaAsesor $ofertaAsesoriaAsesor)
    {
        //
    }
}
