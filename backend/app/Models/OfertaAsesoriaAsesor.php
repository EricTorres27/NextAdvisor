<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Estudiante;
use App\Models\Materia;


class OfertaAsesoriaAsesor extends Model
{

    protected $table = 'oferta_asesoria';
    protected $primaryKey  = 'oferta_id';

    use HasFactory;

    /**
     * The attributes that are mass assignable.
     * 
     * @var array
     */
    protected $fillable = [
       
        'oferta_fecha',
        'oferta_tarifa',
        'estudiante_id',
        'materia_id'
    ];
   
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
   
   
    public function estudiante()
    {
        return $this->hasOne(Estudiante::class,'oferta_id','estudiante_id');
    
    }
        public function materia()
        {
    return $this->hasOne(Materia::class,'oferta_id','materia_id');

        }
}