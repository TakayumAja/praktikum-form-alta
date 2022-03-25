import React from "react";
import List from "../List";
import style from "./style.module.css";

const Form = ({
  handleSubmit,
  handelChange,
  data,
  handleRreset,
  errorMassage,
  fileKesanggupan,
}) => {
  return (
    <div>
      <h1 className={style.title}>Pendaftaran Peserta Coding Bootcamp</h1>

      <form onSubmit={handleSubmit}>
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
            value="it"
            checked={data.pendidikan === "it"}
            onChange={handelChange}
          />
          <label htmlFor="it">IT</label>
          <input
            type="radio"
            name="pendidikan"
            id="nonit"
            value="nonit"
            checked={data.pendidikan === "nonit"}
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
          <input type="file" required ref={fileKesanggupan} />
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

        <List errorMassage={errorMassage} />

        <input type="submit" value="Submit" className={style.btnSubmit} />

        <button className={style.btnReset} onClick={handleRreset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Form;
