<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    protected $table = 'administrador';
    use HasFactory;

    protected $fillable = [
        'administrador_ocupacion',
    ];

    public function cuenta()
    {
        return $this->belongsTo(Cuenta::class,'cuenta_id','cuenta_id_administrador');
    }
}
