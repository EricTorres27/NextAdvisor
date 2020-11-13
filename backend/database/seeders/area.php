<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use Illuminate\Database\Seeder;

class area extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('area')->insert([
            'area_nombre' => "Ambiente construido",
        ]);
        DB::table('area')->insert([
            'area_nombre' => "Negocios",
        ]);
        DB::table('area')->insert([
            'area_nombre' => "Ciencias sociales ",
        ]);
        DB::table('area')->insert([
            'area_nombre' => "Estudios creativos",
        ]);
        DB::table('area')->insert([
            'area_nombre' => "Salud",
        ]);
        DB::table('area')->insert([
            'area_nombre' => "Ingeniería",
        ]);
    }
}
