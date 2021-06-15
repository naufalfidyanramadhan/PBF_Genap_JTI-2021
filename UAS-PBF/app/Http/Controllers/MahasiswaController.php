<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MahasiswaController extends Controller
{
    public function index()
    {
        $mahasiswa = \App\Mahasiswa::all();
 
        return $mahasiswa->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'namamhs' => 'required',
          'jeniskelamin' => 'required',
          'tempattgllahir' => 'required',
          'alamat' => 'required',
          'notlp' => 'required',
          'jurusan' => 'required',
          'prodi' => 'required',
        ]);
 
        $project = \App\Mahasiswa::create([
          'namamhs' => $validatedData['namamhs'],
          'jeniskelamin' => $validatedData['jeniskelamin'],
          'tempattgllahir' => $validatedData['tempattgllahir'],
          'alamat' => $validatedData['alamat'],
          'notlp' => $validatedData['notlp'],
          'jurusan' => $validatedData['jurusan'],
          'prodi' => $validatedData['prodi'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Buat Data Sukses'
        ];
 
        return response()->json($msg);
    }

    public function getMahasiswa($id) // for edit and show
    {
        $mahasiswa = \App\Mahasiswa::find($id);
 
        return $mahasiswa->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'namamhs' => 'required',
            'jeniskelamin' => 'required',
            'tempattgllahir' => 'required',
            'alamat' => 'required',
            'notlp' => 'required',
            'jurusan' => 'required',
            'prodi' => 'required',
        ]);
 
        $mahasiswa = \App\Mahasiswa::find($id);
        $mahasiswa->namamhs = $validatedData['namamhs'];
        $mahasiswa->jeniskelamin = $validatedData['jeniskelamin'];
        $mahasiswa->tempattgllahir = $validatedData['tempattgllahir'];
        $mahasiswa->alamat = $validatedData['alamat'];
        $mahasiswa->notlp = $validatedData['notlp'];
        $mahasiswa->jurusan = $validatedData['jurusan'];
        $mahasiswa->prodi = $validatedData['prodi'];
        $mahasiswa->save();
 
        $msg = [
            'success' => true,
            'message' => 'Edit Data Sukses'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $mahasiswa = \App\Mahasiswa::find($id);
        if(!empty($mahasiswa)){
            $mahasiswa->delete();
            $msg = [
                'success' => true,
                'message' => 'Hapus Data Sukses'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Hapus Data Gagal  '
            ];
            return response()->json($msg);
        }
    }

}
