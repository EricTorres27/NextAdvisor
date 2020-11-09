<?php

namespace App\Http\Controllers;

use App\Models\Materia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;
use Symfony\Component\Console\Input\Input;
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
    public function show($materia_id)
    {
        return Materia::where('materia_id', $materia_id)->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Materia  $materia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $materia_id)
    {
        DB::beginTransaction();
        try {
            
            $mat = Materia::find($materia_id);
            $mat->materia_nombre = $request->input('materia_nombre');
            $mat->area_nombre = $request->input('area_nombre');
            $mat->save();
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Materia  $materia
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $idMateria)
    {
        DB::beginTransaction();
        try {
            Materia::where('materia_id', $idMateria)->delete();
            DB::commit();
            return response()->json([
                'message' => 'Materia eliminada con exito',
                'flag' => 1
            ], 201);
        } catch (QueryException $err) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error al eliminar materia',
                'flag' => 0,
            ], 202);
        }
    }

    public function validarMateria(Request $request)
    {
        return Materia::where('materia_nombre', $request->materia_nombre)->exists();
    }
}
