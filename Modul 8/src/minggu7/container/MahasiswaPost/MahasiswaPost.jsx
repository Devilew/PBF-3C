import React, { Component } from "react";
import './MahasiswaPost.css';
import Mahasiswa from "../../component/MahasiswaPost/Mahasiswa";
import API from "../../services";

class MahasiswaPost extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            userId: 1,
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getMahasiswa().then(result =>{
            this.setState({
                listMahasiswa: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        API.deleteMahasiswa(data)  // alamat URL API yang ingin kita HAPUS datanya
        .then((response) => {      // ketika proses hapus berhasil, maka ambil data dari server API lokal
            this.ambilDataDariServerAPI();
        }) 
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        })
    }

    handleTombolSimpan = () => {
        API.postMahasiswa(this.state.insertMahasiswa)
        .then((response)=>{
            this.ambilDataDariServerAPI();
        });
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="nim" id="nim" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="nama" id="nama" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="alamat" id="alamat" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">No Hp</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="hp" id="hp" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="angkatan" id="angkatan" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="status" id="status" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa => {
                        return <Mahasiswa
                            key={mahasiswa.id}
                            nim={mahasiswa.nim}
                            nama={mahasiswa.nama}
                            alamat={mahasiswa.alamat}
                            hp={mahasiswa.hp}
                            angkatan={mahasiswa.angkatan}
                            status={mahasiswa.status}
                            idMahasiswa={mahasiswa.id}
                            hapusMahasiswa={this.handleHapusMahasiswa} />
                    })
                }
            </div>
        )
    }
}

export default MahasiswaPost;