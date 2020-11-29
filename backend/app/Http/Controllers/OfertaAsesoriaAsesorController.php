<?php

namespace App\Http\Controllers;

use App\Models\OfertaAsesoriaAsesor;
use App\Models\Materia;
use App\Models\Estudiante;
use App\Models\Cuenta;
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
        //$ofertaAsesoriaAsesor = OfertaAsesoriaAsesor::all();
      //  return $ofertaAsesoriaAsesor;
       
           $ofertaAsesoriaAsesor = OfertaAsesoriaAsesor::join('materia', 'oferta_asesoria.materia_id', '=', 'materia.materia_id')
            ->join('estudiante', 'oferta_asesoria.estudiante_id', '=', 'estudiante.estudiante_id')
            ->join('cuenta', 'cuenta.cuenta_id', '=', 'estudiante.cuenta_id_estudiante')
            ->select('estudiante.estudiante_id','oferta_id','oferta_fecha','oferta_tarifa','materia_nombre','cuenta_nombre','cuenta_apellido_paterno','cuenta_apellido_materno','cuenta_id')
            ->orderBy('oferta_id')
            ->get();

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
        
    $idEstudiante = Estudiante:: where('cuenta_id_estudiante', '=', $request->estudiante_id)
    ->select('estudiante_id')
    ->first();
   

        OfertaAsesoriaAsesor::create([

                "oferta_fecha"=>$request->oferta_fecha,
                "oferta_tarifa"=>$request->oferta_tarifa,
                "estudiante_id"=>$idEstudiante->estudiante_id,
                "materia_id"=>$request->materia_id
            ]);
            return response()->json([
                'message' => 'Exitoso',
                'flag' => 0,
            ], 200);
        }
      
        public function MiAsesoria(){
          
            
            $ofertaAsesoriaAsesor = OfertaAsesoriaAsesor::join('materia', 'oferta_asesoria.materia_id', '=', 'materia.materia_id')
            ->join('estudiante', 'oferta_asesoria.estudiante_id', '=', 'estudiante.estudiante_id')
            ->join('cuenta', 'cuenta.cuenta_id', '=', 'estudiante.cuenta_id_estudiante')
            ->select('estudiante.estudiante_id','oferta_id','oferta_fecha','oferta_tarifa','materia_nombre','cuenta_nombre','cuenta_apellido_paterno','cuenta_apellido_materno','cuenta_id')
            -> where('oferta_asesoria.estudiante_id', '=' , $idEstudiante->estudiante_id )
            ->orderBy('oferta_id')
            ->get();
        
        return $ofertaAsesoriaAsesor;
             
        }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OfertaAsesoriaAsesor  $ofertaAsesoriaAsesor
     * @return \Illuminate\Http\Response
     */
    public function show( $oferta_id)
    {
        return OfertaAsesoriaAsesor::where('oferta_id', $oferta_id)->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OfertaAsesoriaAsesor  $ofertaAsesoriaAsesor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $asesoria)
    {
        DB::beginTransaction();
        try {
            
            $as = OfertaAsesoriaAsesor::find($asesoria);
            $as->oferta_fecha = $request->input('oferta_fecha');
            $as->oferta_tarifa = $request->input('oferta_tarifa');
            $as->materia_id = $request->input('materia_id');
            $as->save();
            DB::commit();
            
            return response()->json([
                'message' => 'Asesoria actualizada con exito',
                'flag' => 1
            ], 201);
            
        } catch (QueryException $err) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error al actualizar asesoria',
                'flag' => 0,
            ], 202);
        }  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OfertaAsesoriaAsesor  $ofertaAsesoriaAsesor
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $idOferta)
    {
        DB::beginTransaction();
        try {
            OfertaAsesoriaAsesor::where('oferta_id', $idOferta)->delete();
            DB::commit();
            return response()->json([
                'message' => 'Oferta eliminada con exito',
                'flag' => 1
            ], 201);
        } catch (QueryException $err) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error al eliminar Oferta',
                'flag' => 0,
            ], 202);
        }
    }

    public function getMateria(){
        $materia=Materia::select('materia_id','materia_nombre')->get();
        return $materia;
    }

    

public function conseguirEstudiante($idCuenta){

    $idEstudiante = Estudiante:: where('cuenta_id_estudiante', '=', $idCuenta)
    ->select('estudiante_id')
    ->first();
    $ofertaAsesoriaAsesor = OfertaAsesoriaAsesor::join('materia', 'oferta_asesoria.materia_id', '=', 'materia.materia_id')
            ->join('estudiante', 'oferta_asesoria.estudiante_id', '=', 'estudiante.estudiante_id')
            ->join('cuenta', 'cuenta.cuenta_id', '=', 'estudiante.cuenta_id_estudiante')
            ->select('estudiante.estudiante_id','oferta_id','oferta_fecha','oferta_tarifa','materia_nombre','cuenta_nombre','cuenta_apellido_paterno','cuenta_apellido_materno','cuenta_id')
            -> where('estudiante.estudiante_id', '=' ,  $idEstudiante->estudiante_id )
            ->orderBy('oferta_id')
            ->get();
        
        return $ofertaAsesoriaAsesor;
             
 
}




}
