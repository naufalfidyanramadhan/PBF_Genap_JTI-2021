import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './About.css';

class About extends Component {

    render() {
        return (
            <div className="cart">
                <div className="container">
                    <h1>Biodata Saya</h1>
                    <div className="cart-list">
                    <p>Nama: Naufal Fidyan Ramadhan</p>
                        <p>Kelas: TI-3F</p>
                        <p>NIM: 1841720032</p>
                        <p>Jurusan: Teknologi Informasi</p>
                        <p>Program Studi: D4 Teknik Informatika</p>
                        <div className="img-wrp">
                        <img src={`/media/aku.jpg`}/>    
                        </div>                                         
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
