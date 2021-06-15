import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import { FaTrash, FaEdit, FaDesktop, FaPlusSquare, FaCheckCircle, FaList } from 'react-icons/fa'
 
class MahasiswaIndex extends Component {
     
    constructor () {
        super()
        this.state = {
            mahasiswas: [],
            msg: null,
            type: null,
            flash:false,
            alert: null,
        }
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    componentDidMount () {
        axios.get('/api/mahasiswas').then(response => {
            this.setState({
                mahasiswas: response.data
            })
        })  
    }
 
    confirmDelete(id){
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Hapus"
                cancelBtnText="Tidak"
                confirmBtnBsStyle="default"
                cancelBtnBsStyle="danger"
                title="Tunggu..."
                onConfirm={() => this.deleteItem(id)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
                >
                Jika sudah dihapus, tidak bisa kembali lagi
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    deleteItem(id) {
        axios.delete(`/api/mahasiswa/delete/${id}`).then(response => {
            var msg = response.data.success;
            if(msg == true){
                this.hideAlert();
                this.goToHome();
            }
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
                Menghapus Data Sukses
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess(){
        this.componentDidMount();
        this.hideAlert();
    }
 
    render () {
        const { mahasiswas } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                {/* <div className='card'> */}
                  {/* <div className='card-header'></div> */}
                  <div className='card-body'>
                    <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                      Buat Data Mahasiswa
                    </Link>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th width="50" className="text-center">No</th>
                                    <th className="text-center">Nama Mahasiswa</th>
                                    <th width="200" className="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mahasiswas.map((mahasiswa, i) => (
                                <tr key={i}>
                                    <td width="50" className="text-center">{i + 1}</td>
                                    <td>{mahasiswa.namamhs}</td>
                                    <td width="200" className="text-center">
                                        <div className="btn-group">
                                        <Link
                                            className='btn btn-primary'
                                            to={`/mahasiswa/${mahasiswa.id}`}
                                            ><FaList/>
                                        </Link>
                                        <Link
                                            className='btn btn-success'
                                            to={`/mahasiswa/edit/${mahasiswa.id}`}
                                            ><FaEdit/>
                                        </Link>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => this.confirmDelete(mahasiswa.id)}
                                            ><FaTrash/>
                                        </button>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        {this.state.alert}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        //   </div>
        )
    }
}
 
export default MahasiswaIndex