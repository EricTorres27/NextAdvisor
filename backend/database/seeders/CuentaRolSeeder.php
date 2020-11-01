<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class CuentaRolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $i = 1;
        while ($i <= 20):
            DB::table('cuenta_rol')->insert([
                'cuenta_id' => $i,
                'rol_id'=>$faker-> numberBetween($min = 1, $max = 2),
            ]);
            $i++;
        endwhile;
    }
}