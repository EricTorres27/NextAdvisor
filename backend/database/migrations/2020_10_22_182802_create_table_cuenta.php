<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableCuenta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cuenta', function (Blueprint $table) {
            $table->increments('cuenta_id');
            $table->string('cuenta_nombre_usuario')->unique();
            $table->string('cuenta_correo')->unique();
            $table->string('contraseña');
            $table->string('cuenta_telefono');
            $table->string('cuenta_nombre');
            $table->string('cuenta_apellido_paterno');
            $table->string('cuenta_apellido_materno');
            $table->string('cuenta_genero');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cuenta');
    }
}
