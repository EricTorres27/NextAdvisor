<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableOfertaAsesoriaAsesor extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('oferta_asesoria_asesor', function (Blueprint $table) {
            $table->unsignedInteger('oferta_id');
            $table->foreign('oferta_id')->references('oferta_id')->on('oferta_asesoria')->onDelete('cascade');
            $table->unsignedInteger('estudiante_id');
            $table->foreign('estudiante_id')->references('estudiante_id')->on('estudiante')->onDelete('cascade');
            $table->date('fecha_aprobacion');
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
        Schema::dropIfExists('oferta_asesoria_asesor');
    }
}
