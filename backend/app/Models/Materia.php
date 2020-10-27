<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Materia;
use App\Models\Area;
use App\Models\Administrador;

class Materia extends Model
{

    protected $table = 'materia';
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     * 
     * @var array
     */
    protected $fillable = [
        'materia_nombre',
        'area_id'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
   
   
    public function area()
    {
        return $this->belongsTo(Area::class,'materia_id','area_id');
    
    }
        public function administrador()
        {
    return $this->hasOne(Administrador::class,'materia_id','administrador_id');

        }
}