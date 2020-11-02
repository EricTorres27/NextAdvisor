<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    protected $table = 'administrador';
    protected $primaryKey  = 'administrador_id';
    use HasFactory;

    protected $fillable = [
        'administrador_ocupacion',
    ];

    public function cuenta()
    {
        return $this->belongsTo(Cuenta::class,'cuenta_id','cuenta_id_administrador');
    }

    public function preguntas()
    {
        return $this->hasMany(Pregunta::class,'administrador_id','administrador_id');
    }
    
}
