<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMahasiswasTable extends Migration
{
    
    public function up()
    {
        Schema::create('mahasiswas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('namamhs');
            $table->string('jeniskelamin');
            $table->string('tempattgllahir');
            $table->string('alamat');
            $table->string('notlp');
            $table->string('jurusan');
            $table->string('prodi');
            $table->timestamps();
        });
    }
     
    public function down()
    {
        Schema::dropIfExists('mahasiswas');
    }
}
