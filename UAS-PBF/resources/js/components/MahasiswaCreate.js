import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import { FaTrash, FaEdit, FaDesktop, FaPlusSquare } from 'react-icons/fa'
 
class MahasiswaCreate extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
          namamhs: '',
          jeniskelamin: '',
          tempattgllahir: '',
          alamat: '',
          notlp: '',
          jurusan: '',
          prodi: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewMahasiswa = this.handleCreateNewMahasiswa.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
 
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Sukses!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="OKE"
                >
                Membuat Data Sukses
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewMahasiswa (event) {
        event.preventDefault()
        const mahasiswa = {
          namamhs: this.state.namamhs,
          jeniskelamin: this.state.jeniskelamin,
          tempattgllahir: this.state.tempattgllahir,
          alamat: this.state.alamat,
          notlp: this.state.notlp,
          jurusan: this.state.jurusan,
          prodi: this.state.prodi,
        }
        axios.post('/api/mahasiswa/store', mahasiswa).then(response => { 
            var msg = response.data.success;
            if(msg == true){
                return this.goToHome();
            }
        })
    }
 
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
 
    render () {
        return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                {/* <div className='card'>
                  <div className='card-header'>Tambah Data Baru</div> */}
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewMahasiswa}>
                      <div className='form-group'>
                        <label htmlFor='namamhs'>Nama Mahasiswa</label>
                        <input
                          id='namamhs'
                          type='text'
                          className={`form-control ${this.hasErrorFor('namamhs') ? 'is-invalid' : ''}`}
                          name='namamhs'
                          value={this.state.namamhs}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('namamhs')}
                      </div>

                      <div className='form-group'>
                        <label htmlFor='jeniskelamin'>Jenis Kelamin</label>
                        <input
                          id='jeniskelamin'
                          type='text'
                          className={`form-control ${this.hasErrorFor('jeniskelamin') ? 'is-invalid' : ''}`}
                          name='jeniskelamin'
                          value={this.state.jeniskelamin}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('jeniskelamin')}
                      </div>

                      <div className='form-group'>
                        <label htmlFor='tempattgllahir'>Tempat tanggal lahir</label>
                        <input
                          id='tempattgllahir'
                          type='text'
                          className={`form-control ${this.hasErrorFor('tempattgllahir') ? 'is-invalid' : ''}`}
                          name='tempattgllahir'
                          value={this.state.tempattgllahir}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('tempattgllahir')}
                      </div>

                      <div className='form-group'>
                        <label htmlFor='alamat'>Alamat</label>
                        <input
                          id='alamat'
                          type='text'
                          className={`form-control ${this.hasErrorFor('alamat') ? 'is-invalid' : ''}`}
                          name='alamat'
                          value={this.state.alamat}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('alamat')}
                      </div>

                      <div className='form-group'>
                        <label htmlFor='notlp'>No Telpon</label>
                        <input
                          id='notlp'
                          type='text'
                          className={`form-control ${this.hasErrorFor('notlp') ? 'is-invalid' : ''}`}
                          name='notlp'
                          value={this.state.notlp}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('notlp')}
                      </div>

                      <div className='form-group'>
                        <label htmlFor='jurusan'>Jurusan</label>
                        <input
                          id='jurusan'
                          type='text'
                          className={`form-control ${this.hasErrorFor('jurusan') ? 'is-invalid' : ''}`}
                          name='jurusan'
                          value={this.state.jurusan}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('jurusan')}
                      </div>

                      <div className='form-group'>
                        <label htmlFor='prodi'>Program Studi</label>
                        <input
                          id='prodi'
                          type='text'
                          className={`form-control ${this.hasErrorFor('prodi') ? 'is-invalid' : ''}`}
                          name='prodi'
                          value={this.state.prodi}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('prodi')}
                      </div>


                      {/* <div className='form-group'>
                        <label htmlFor='content'>Deskripsi Mahasiswa</label>
                        <textarea
                          id='content'
                          className={`form-control ${this.hasErrorFor('content') ? 'is-invalid' : ''}`}
                          name='content'
                          rows='10'
                          value={this.state.content}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('content')}
                      </div> */}

                      <div className="btn-group">
                        <Link
                        className='btn btn-primary'
                        to={`/`}
                        >Kembali
                      </Link>
                      <button className='btn btn-success'>Buat</button>
                      {this.state.alert}</div>
                
                    </form>
                  </div>
                </div>
              </div>
            </div>
          // </div>
        )
    }
}
export default MahasiswaCreate