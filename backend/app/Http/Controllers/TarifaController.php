<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Models\Tarifa;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TarifaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tarifas = Tarifa::all();
        return $tarifas;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Tarifa
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'oferta_tarifa' => 'required',
        ]);
        /**
         * Revisar que el correo no exista ya
         */
        if ($this->validarTarifa($request) == 1) {
            return response()->json([
                'message' => 'La tarifa ingresada es la misma.',
                'flag' => 0,
            ], 202);
        } else {

            Tarifa::create([
              "oferta_tarifa"=>$request->oferta_tarifa,
              ]);

              return response()->json([
                  'message' => 'Registro exitoso',
                  'flag' => 0,
              ], 200);

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Registro  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function show($tarifa)
    {
        echo "oferta_tarifa: $oferta_tarifa";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Registro  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tarifa $tarifa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tarifa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tarifa $tarifa)
    {
    }

    public function validarTarifa(Tarifa $tarifa)
    {

        return Tarifa::where('oferta_tarifa', $request->oferta_tarifa)->exists();
    }

}
