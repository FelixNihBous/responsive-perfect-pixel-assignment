import React from 'react';
import '../css/responsive.css';

function Responsive() {
  return (
    <div className="container">
      <div className="box pc">
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


      <div className="box mb">
        <div className="text-content">
          <p className="gray font-20px">Kecerdasaran visual</p>
          <h1 className="judul white font-42px judul-mobile">Lihat dunia dari lensa yang baru.</h1>
          <p className="description gray font-18px">
            Gunakan <span className="white width-auto">kecerdasan visual </span>
            melalui Kontrol Kamera <br />untuk
            langsung mempelajari tentang
            semua hal yang <br />Anda liat.
            Cukup <span className="white">arahkan iPhone 16 Pro
            Anda untuk <br />menemukan lebih </span>
            atau berinteraksi dengan <br />
            sesuatu di depan Anda. Cari
            tahu di mana tempat <br />membeli
            barang baru yang Anda lihat,
            identifikasikan <br />tanaman dan hewan, dan
            banyak lagi.
          </p>
        </div>
        <div className="image-container">
          <img src="https://s3-alpha-sig.figma.com/img/2c92/727a/f508b52dbc762450046e9fa820612089?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ChJl0W9S1N5D~28cvJa0PrlotSxK7~t6UgynweuudzzJb-Bsu17I-4ao9QtSPMu~rmbD2uutH91UhYw7SIGaL547NQtTv~86juq4Bz6jcwSCcOhNQ3JwzPsrENT6txE1a7xwpIh7GPOp80laewiHpxidUmmpcdCVQ4cbEnydLTUtewB5NWLGh-4Za3HMPxgEC~kz6bomJw3GJgnHrU6LuvxWsphg4QU9-UABL3khztQ2rf2oyxpVpRG2L7CxzpS17F745-C1C3w-5~IuMp0OJLOFAOcFZYZYT1ANlUCfbpHGcGM5~~7Fg61fGo~6vMBCxqN2lh2-krGiPhafb1sXSg__" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Responsive;