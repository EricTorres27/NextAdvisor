<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    protected $table = 'administrador';
    use HasFactory;

    protected $fillable = [
        'cuenta_id_administrador',
        'administrador_ocupacion',
    ];

   
}
