<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableMateria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materia', function (Blueprint $table) {
            $table->increments('materia_id');
            $table->string('materia_nombre');
            $table->unsignedInteger('administrador_id');
            $table->foreign('administrador_id')->references('administrador_id')->on('administrador')->onDelete('cascade');
            $table->unsignedInteger('area_id');
            $table->foreign('area_id')->references('area_id')->on('area')->onDelete('cascade');
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
        Schema::dropIfExists('materia');
    }
}
