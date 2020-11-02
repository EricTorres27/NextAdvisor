<?php

namespace App\Http\Controllers;

use App\Models\Materia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;

use Illuminate\Support\Facades\DB;

class MateriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       // $materias= Materia::all();
        //return $materias;

        $materias= Materia::join('area', 'materia.area_id', '=', 'area.area_id')
        ->select('materia_id', 'materia_nombre', 'area.area_nombre')
        ->orderBy('materia_id')
        ->get();
    return $materias;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       

        if ($this->validarMateria($request) == 1) {
            return response()->json([
                'message' => 'Materia duplicada',
                'flag' => 0,
            ], 202);
        }  else {

            Materia::create([
                "materia_nombre"=>$request->materia_nombre,
                "area_id"=>$request->area_id,
                "administrador_id"=>"1"
            ]);
            
            return response()->json([
                'message' => 'Exitoso',
                'flag' => 0,
            ], 200);
             
            }
        }
    

          

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Materia  $materia
     * @return \Illuminate\Http\Response
     */
    public function show($materia)
    {
       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Materia  $materia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Materia $materia)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Materia  $materia
     * @return \Illuminate\Http\Response
     */
    public function destroy(Materia $materia)
    {
        //
    }

    public function validarMateria(Request $request)
    {
        return Materia::where('materia_nombre', $request->materia_nombre)->exists();
    }
}
