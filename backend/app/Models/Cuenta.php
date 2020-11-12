<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Estudiante;

class Cuenta extends Authenticatable
{
    protected $table = 'cuenta';
    protected $primaryKey  = 'cuenta_id';
    protected $email  = 'cuenta_correo';
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cuenta_nombre_usuario',
        'cuenta_correo',
        'password',
        'cuenta_telefono',
        'cuenta_nombre',
        'cuenta_apellido_paterno',
        'cuenta_apellido_materno',
        'cuenta_genero'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function roles()
    {
        return $this->belongsToMany(Rol::class,'cuenta_rol','cuenta_id','rol_id');
    }
    public function estudiante()
    {
        return $this->hasOne(Estudiante::class,'cuenta_id_estudiante','cuenta_id');
    }
    public function administrador()
    {
        return $this->hasOne(Estudiante::class,'cuenta_id_administrador','cuenta_id');
    }


}
