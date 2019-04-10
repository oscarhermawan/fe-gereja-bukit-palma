import React, {Component} from 'react';
import './Footer.css'
import './Style.css'
import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component{
  constructor(){
    super()
    this.state ={

    }
  }

  render(){
    return(
      <div className="footer-wrapper">
        <div className="footer-wrapper-box">
          <div className="block-3">
            <div className="footer-title">
              <h1>GKPB Bukit Palma</h1>
              <br/>
              <a href="/kosong" class="fa fa-facebook"> </a>
              <a href="/kosong" class="fa fa-twitter"> </a>
              <a href="/kosong" class="fa fa-youtube"> </a>
              <a href="/kosong" class="fa fa-instagram"> </a>
            </div>
          </div>
          <div className="block-3">
            <div className="footer-link">
              <h2>Tautan</h2>
              <div className="block-2">
                <ul>
                  <li>
                  <a href="/">Beranda</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/warta_jemaat">Warta Jemaat</a>
                  </li>
                  <li>
                    <a href="/galeri">Galeri</a>
                  </li>
                </ul>
              </div>
              <div className="block-2">
                <ul>
                  <li>
                    <a href="/donasi">Donasi</a>
                  </li>
                  <li>
                    <a href="/hubungikami">Kontak</a>
                  </li>
                  <li>
                    <a href="/tentag_kami">Tentang Kami</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="block-3">
            <div className="footer-contact">
              <h2>Kontak</h2>
              <p><span>Alamat: </span> 1481 Creekside Lane Avila Beach, CA 93424 </p>
              <p><span>Telepon: </span>:+53 345 7953 32453 </p>
              <p><span>Email: </span>yourmail@gmail.com </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
