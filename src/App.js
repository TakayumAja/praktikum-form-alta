import React, { useState, useRef } from "react";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  const [data, setData] = useState({
    nama: "",
    email: "",
    nohp: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  });

  const regexNama = /^[A-Za-z ]*$/;
  const reagexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const [errorMassage, setErrormassage] = useState();

  const fileKesanggupan = useRef(null);

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "nama") {
      if (regexNama.test(value)) {
        setErrormassage("");
      } else {
        setErrormassage("Nama Lengkap Harus Berupa Huruf");
      }
    } else if (name === "nohp") {
      if (value.length < 9) {
        setErrormassage("Panjang Karakter No Hp Masih Kurang dari 9 Karakter");
      } else if (value.length > 14) {
        setErrormassage("Panjang Karakter No Hp Lebih dari 14 Karakter");
      } else {
        setErrormassage("");
      }
    } else if (name === "email") {
      if (reagexEmail.test(value)) {
        setErrormassage("");
      } else {
        setErrormassage("Email Tidak Sesuai");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (errorMassage !== "") {
      alert("Data Pendaftar Tidak Sesuai");
    } else {
      alert(`Daftar Pendaftar ${data.nama} Berhasil Diterima`);
    }

    handleRreset();
    e.preventDefault();
  };

  const handleRreset = () => {
    setData({
      nama: "",
      email: "",
      nohp: "",
      pendidikan: "",
      kelas: "",
      harapan: "",
    });

    setErrormassage("");
  };

  return (
    <div className="App">
      <Form
        handleSubmit={handleSubmit}
        handelChange={handelChange}
        data={data}
        handleRreset={handleRreset}
        errorMassage={errorMassage}
        fileKesanggupan={fileKesanggupan}
      />
    </div>
  );
};

export default App;
