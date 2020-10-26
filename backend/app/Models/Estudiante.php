<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    protected $table = 'estudiante';
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     * 
     * @var array
     */
    protected $fillable = [
        'estudiante_carrera',
        'estudiante_semestre',
        'estudiante_calificacion',
        'asesor_calificacion',
    ];
    public function cuenta()
    {
        return $this->belongsTo(Cuenta::class,'cuenta_id','estudiante_cuenta_id');
    }
}
