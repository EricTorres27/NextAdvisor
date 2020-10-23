<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableRolePrivilegio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rol_privilegio', function (Blueprint $table) {
            $table->unsignedInteger('rol_id');
            $table->foreign('rol_id')->references('rol_id')->on('rol')->onDelete('cascade');
            $table->unsignedInteger('privilegio_id');
            $table->foreign('privilegio_id')->references('privilegio_id')->on('privilegio')->onDelete('cascade');
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
        Schema::dropIfExists('rol_privilegio');
    }
}
