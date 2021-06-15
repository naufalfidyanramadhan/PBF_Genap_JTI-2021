import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
    class MahasiswaShow extends Component {
      constructor (props) {
        super(props)
        this.state = {
          mahasiswa: {}
        }
      }
 
      componentDidMount () {
 
        const mahasiswaId = this.props.match.params.id
 
        axios.get(`/api/mahasiswa/${mahasiswaId}`).then(response => {
          this.setState({
            mahasiswa: response.data
          })
        })
      }
 
      render () {
        const { mahasiswa } = this.state
 
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>Nama Mahasiswa {mahasiswa.namamhs}</div>
                  <div className='card-body'>
                    <p>{mahasiswa.jeniskelamin}</p>
                    <p>{mahasiswa.tempattgllahir}</p>
                    <p>{mahasiswa.jeniskelamin}</p>
                    <p>{mahasiswa.alamat}</p>
                    <p>{mahasiswa.notlp}</p>
                    <p>{mahasiswa.jurusan}</p>
                    <p>{mahasiswa.prodi}</p>
                    <Link
                        className='btn btn-primary'
                        to={`/`}
                        >Kembali
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
 
export default MahasiswaShow