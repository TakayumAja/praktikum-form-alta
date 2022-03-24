import React, { useState } from "react";
import style from "./style.module.css";

const Form = () => {
  const [data, setData] = useState({
    nama: "",
    email: "",
    nohp: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  });

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };
  console.log(data);
  return (
    <div>
      <h1>Pendaftaran Peserta Coding Bootcamp</h1>

      <form>
        <div className={style.labelinput}>
          <label htmlFor="nama">Nama Lengkap: </label>
          <br />
          <input
            type="text"
            name="nama"
            className={style.input}
            required
            value={data.nama}
            onChange={handelChange}
          />
        </div>

        <div className={style.labelinput}>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            type="email"
            name="email"
            className={style.input}
            required
            value={data.email}
            onChange={handelChange}
          />
        </div>

        <div className={style.labelinput}>
          <label htmlFor="nama">No. Handphone</label>
          <br />
          <input
            type="text"
            name="nohp"
            className={style.input}
            required
            value={data.nohp}
            onChange={handelChange}
          />
        </div>

        <div className={style.labelinput}>
          <label htmlFor="pendidikan">Latar Belakang Pendidikan</label>
          <br />
          <input
            type="radio"
            name="pendidikan"
            id="it"
            required
            value={data.it}
            checked={data.pendidikan === "it"}
            onChange={handelChange}
          />
          <label htmlFor="it">IT</label>
          <input
            type="radio"
            name="pendidikan"
            id="nonit"
            checked={data.pendidikan === data.pendidikan.nonit}
            onChange={handelChange}
          />
          <label htmlFor="nonit">Non It</label>
        </div>

        <div className={style.labelinput}>
          <label htmlFor="kelas">Kelas Coding yang Dipilih:</label>
          <br />
          <select
            name="kelas"
            id="kelas"
            className={style.select}
            required
            value={data.kelas}
            onChange={handelChange}
          >
            <option value="none">Pilih salah Satu Program</option>
            <option value="golang">Coding Backend with Golang</option>
            <option value="reactjs">Coding Frontedn with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
        </div>

        <div className={style.labelinput}>
          <label htmlFor="file">Foto Surat Kesungguhan</label>
          <br />
          <input type="file" required />
        </div>

        <div className={style.labelinput}>
          <label htmlFor="harapan">Harapan Untuk Coding Bootcamp ini:</label>
          <br />
          <textarea
            name="harapan"
            id="harapan"
            cols="30"
            rows="10"
            className={style.area}
            value={data.harapan}
            onChange={handelChange}
          ></textarea>
        </div>

        <input type="submit" value="Submit" className={style.btnSubmit} />

        <button className={style.btnReset}>Reset</button>
      </form>
    </div>
  );
};

export default Form;
