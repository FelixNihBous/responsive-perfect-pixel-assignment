import React from 'react';
import '../css/responsive.css';

function Responsive() {
  return (
    <div className="container">
      <div className="box">
        <div className="text-content">
          <p className="gray font-20px">Kecerdasaran visual</p>
          <h1 className="judul white font-42px">Lihat dunia dari lensa yang baru.</h1>
          <p className="description gray font-18px">
            Gunakan <span className="white width-auto">kecerdasan visual </span>
            <br />melalui Kontrol Kamera untuk
            <br />langsung mempelajari tentang <br />
            semua hal yang Anda liat.
            <br />Cukup <span className="white">arahkan iPhone 16 Pro
            <br />Anda untuk menemukan lebih </span>
            <br />atau berinteraksi dengan <br />
            sesuatu di depan Anda. Cari <br />
            tahu di mana tempat membeli <br />
            barang baru yang Anda lihat, <br />
            identifikasikan tanaman dan hewan, dan
            banyak lagi.
          </p>
        </div>
        <div className="image-container">
          <img src="https://www.figma.com/file/K0CeqfEkFXnJbOjr6rPlwD/image/2c92727af508b52dbc762450046e9fa820612089" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Responsive;