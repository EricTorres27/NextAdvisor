<?php

namespace Database\Factories;

use App\Models\Cuenta;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;

class CuentaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Cuenta::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker = Faker::create();
        return [
            'cuenta_nombre_usuario' => $faker->userName(),
            'cuenta_correo' => $faker->freeEmail(),
            'contraseña' => $faker->password(),
            'cuenta_telefono' => $faker->phoneNumber(),
            'cuenta_nombre' => $faker->firstName(),
            'cuenta_apellido_paterno' => $faker->lastName (),
            'cuenta_apellido_materno'=> $faker->lastName(),
            'cuenta_genero' => $faker->randomElement(['Hombre','Mujer'])
        ];
    }
}
