<?php

namespace App\Http\Controllers;

use App\Models\Materia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
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
        $materias= Materia::all();
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
        $validator = Validator::make($request->all(), [
            'materia_nombre' => 'required',
            'area_id' => 'required|unique:materia',
            
        ]);
 /**
         * Revisar que el correo no exista ya
         */
        if ($this->validarMateria($request) == 1) {
            return response()->json([
                'message' => 'Materia duplicada',
                'flag' => 0,
            ], 202);
        }  else {
                DB::beginTransaction();
                try {

                    /**
                     * Crear una materia en el sistema
                     */
                   

                    $materia = new materia();
                        $materia->materia_nombre=$request->materia_nombre;
                        

                    if ($materia->materia()->save($materia)) {
                        DB::commit();
                        return response()->json([
                            'message' => 'Registrado con exito',
                            'flag' => 1,
                            'materia' => $materia
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

}

          

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Materia  $materia
     * @return \Illuminate\Http\Response
     */
    public function show($materia)
    {
        echo "materia_id: $materia";
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
