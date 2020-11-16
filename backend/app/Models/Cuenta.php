<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Estudiante;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Cuenta extends Authenticatable implements JWTSubject
{
    protected $table = 'cuenta';
    protected $primaryKey  = 'cuenta_id';
    use HasFactory;
    use Notifiable;

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
        'cuenta_genero',
        'rol_id'
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

    public function rol()
    {
        return $this->belongsTo(Rol::class,'cuenta_id', 'rol_id');
    }
    public function estudiante()
    {
        return $this->hasOne(Estudiante::class,'cuenta_id_estudiante','cuenta_id');
    }
    public function administrador()
    {
        return $this->hasOne(Estudiante::class,'cuenta_id_administrador','cuenta_id');
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

}
