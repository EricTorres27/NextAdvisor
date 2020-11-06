<?php

namespace Database\Seeders;

use App\Models\Cuenta;
use App\Models\CuentaRol;
use App\Models\Privilegio;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::table('rol')->insert([
            'rol_nombre' => "Estudiante",
            'rol_descripcion' => Str::random(20),
        ]);
        DB::table('rol')->insert([
            'rol_nombre' => "Asesor",
            'rol_descripcion' => Str::random(20),
        ]);
        DB::table('rol')->insert([
            'rol_nombre' => "Administrador",
            'rol_descripcion' => Str::random(20),
        ]);
        Cuenta::factory()->count(20)->create();

    }
}
