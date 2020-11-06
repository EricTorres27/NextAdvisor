<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableAsesorMateria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asesor_materia', function (Blueprint $table) {
            $table->increments('asesor_materia_id');
            $table->unsignedInteger('estudiante_id');
            $table->foreign('estudiante_id')->references('estudiante_id')->on('estudiante')->onDelete('cascade');
            $table->unsignedInteger('materia_id');
            $table->foreign('materia_id')->references('materia_id')->on('materia')->onDelete('cascade');
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
        Schema::dropIfExists('asesor_materia');
    }
}
