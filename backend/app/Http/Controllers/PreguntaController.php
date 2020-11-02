<?php

namespace App\Http\Controllers;

use App\Models\Administrador;
use App\Models\Pregunta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Symfony\Component\Console\Input\Input;

class PreguntaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $preguntas = Pregunta::join('administrador', 'pregunta.administrador_id', '=', 'administrador.administrador_id')
            ->select('pregunta_id', 'pregunta_pregunta', 'pregunta_respuesta')
            ->orderBy('pregunta_id')
            ->get();
        return $preguntas;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $administrador = Administrador::findOrFail($request->input('administrador_id'));
            $administrador->preguntas()->create([
                'pregunta_pregunta' => $request->input('pregunta_pregunta'),
                'pregunta_respuesta' => $request->input('pregunta_respuesta')
            ]);
            DB::commit();
            return response()->json([
                'message' => 'Registrado con exito',
                'flag' => 1,
            ], 201);
        } catch (QueryException $err) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error al crear pregunta',
                'flag' => 0,
            ], 202);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pregunta  $pregunta
     * @return \Illuminate\Http\Response
     */
    public function show(int $preguntaId)
    {
        return Pregunta::where('pregunta_id', $preguntaId)->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pregunta  $pregunta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $preguntaId)
    {
        DB::beginTransaction();
        try {
            $pregunta = Pregunta::find($preguntaId);
            $pregunta->pregunta_pregunta = $request->input('pregunta_pregunta');
            $pregunta->pregunta_respuesta = $request->input('pregunta_respuesta');
            $pregunta->save();
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
     * @param  \App\Models\Pregunta  $pregunta
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $idPregunta)
    {
        DB::beginTransaction();
        try {
            Pregunta::where('pregunta_id', $idPregunta)->delete();
            DB::commit();
            return response()->json([
                'message' => 'Pregunta eliminada con exito',
                'flag' => 1
            ], 201);
        } catch (QueryException $err) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error al eliminar pregunta',
                'flag' => 0,
            ], 202);
        }
    }
}
