<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableEstudiante extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estudiante', function (Blueprint $table) {
            $table->unsignedInteger('estudiante_id')->primary();
            $table->foreign('estudiante_id')->references('cuenta_id')->on('cuenta')->onDelete('cascade');
            $table->integer('estudiante_calificacion');
            $table->integer('asesor_calificacion');
            $table->string('estudiante_carrera');
            $table->integer('estudiante_semestre');
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
        Schema::dropIfExists('estudiante');
    }
}
