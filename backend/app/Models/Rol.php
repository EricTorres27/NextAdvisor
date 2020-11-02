<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    protected $table = 'rol';
    protected $primaryKey  = 'rol_id';
    use HasFactory;

    public function cuentas()
    {
        return $this->belongsToMany(Cuenta::class,'cuenta_rol','rol_id','cuenta_id');
    }
}
