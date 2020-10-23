<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableOfertaAsesoria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('oferta_asesoria', function (Blueprint $table) {
            $table->increments('oferta_id');
            $table->date('oferta_fecha');
            $table->integer('oferta_tarifa');
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
        Schema::dropIfExists('oferta_asesoria');
    }
}
