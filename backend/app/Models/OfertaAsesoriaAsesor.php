<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfertaAsesoriaAsesor extends Model
{
    protected $fillable  = ["oferta_fecha","oferta_tarifa", "materia_id"];
    
    use HasFactory;
}
