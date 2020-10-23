<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableCuentaRol extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cuenta_rol', function (Blueprint $table) {
            $table->increments('cuenta_rol_id');
            $table->unsignedInteger('rol_id');
            $table->foreign('rol_id')->references('rol_id')->on('rol')->onDelete('cascade');
            $table->unsignedInteger('cuenta_id');
            $table->foreign('cuenta_id')->references('cuenta_id')->on('cuenta')->onDelete('cascade');
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
        Schema::dropIfExists('cuenta_rol');
    }
}
