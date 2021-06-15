<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    protected $table = "mahasiswas";
    protected $fillable = ['namamhs', 'jeniskelamin', 'tempattgllahir', 'alamat',
                            'notlp', 'jurusan', 'prodi'];
}
