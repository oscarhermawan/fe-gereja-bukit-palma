import React, {Component} from 'react'
import './Menu.css'

class Menu extends Component{
  constructor(){
    super();
    this.state={
      navbar_menu : "dropdown dropdown-false"
    }
  }

  navbarDropdown(){
    if(this.state.navbar_menu !== "dropdown"){
      this.setState({navbar_menu:"dropdown"})
    } else {
      this.setState({navbar_menu:"dropdown dropdown-false"})
    }
  }

  render(){
    return(
      <div className="menu-wrapper">
        <div className="navbar-utama">
          <span>GKPB Bukit Palma</span>
          <div className="right-menu">
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
              <li>
                <a href="/donasi">Donasi</a>
              </li>
              <li>
                <a href="/hubungikami">Hubungi Kami</a>
              </li>
            </ul>
            <div className="container" onClick={()=> this.navbarDropdown()}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
        <div className="clear-both">
        </div>
        <div className={this.state.navbar_menu}>
          GAAA
        </div>
      </div>
    )
  }
}

export default Menu;
