<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pregunta extends Model
{
    protected $table = 'pregunta';
    protected $primaryKey  = 'pregunta_id';
    use HasFactory;

    protected $fillable = [
        'pregunta_pregunta',
        'pregunta_respuesta',
    ];

    public function administrador(){

        return $this->belongsTo(Administrador::class,'administrador_id','administrador_id');
    }
}
