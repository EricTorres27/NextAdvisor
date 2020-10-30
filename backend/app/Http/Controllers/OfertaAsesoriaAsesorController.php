<?php

namespace App\Http\Controllers;

use App\Models\OfertaAsesoriaAsesor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;


use Illuminate\Support\Facades\DB;

class OfertaAsesoriaAsesorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $ofertaAsesoriaAsesor = OfertaAsesoriaAsesor::all();
        return $ofertaAsesoriaAsesor;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


            OfertaAsesoriaAsesor::create([
                "oferta_fecha"=>$request->oferta_fecha,
                "oferta_tarifa"=>$request->oferta_tarifa,
                "estudiante_id"=>"1",
                "materia_id"=>$request->materia_id
            ]);

            return response()->json([
                'message' => 'Exitoso',
                'flag' => 0,
            ], 200);
             
            
        //}
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

   // public function validarAsesoria(Request $request)
    //{
    //    return OfertaAsesoriaAsesor::where('oferta_id', $oferta_id)->exists();
   // }
}
