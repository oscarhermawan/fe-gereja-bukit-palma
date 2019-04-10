import React, {Component} from 'react'
import './Gallery.css'
import './Style.css'

class Gallery extends Component{
  constructor(){
    super()
    this.state = {
      aturgambar: {
        width: "320px",
        height: "200px",
        objectFit: "cover"
      }
    }
  }

  test = () =>{

  }

  handleResize = () => {
    if(window.innerWidth >= 1201){
      this.setState({
        aturgambar: {...this.state.aturgambar, width:`${(1200-(20*8))/4}px`},
      })
    }

    else if(window.innerWidth >= 1021){
      this.setState({
        aturgambar: {...this.state.aturgambar, width:`${(window.innerWidth-(40*4))/4}px`},
      })
    } else {
      this.setState({
        aturgambar: {...this.state.aturgambar, width:`${(window.innerWidth-20-20-20-20)/2}px`},
      })
    }

  }


  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  render(){
    return(
      <div className="gallery-wrapper">
        <h2>Galleri Kita</h2>
        <div className="garis-bawah gallery-tambah-jarak">
        </div>
        <div className="block-4">
          <div className="photo-booth">
            <img src={require('../img/01.jpg')} style={this.state.aturgambar} alt="img"/>
          </div>
        </div>
        <div className="block-4">
          <div className="photo-booth">
            <img src={require('../img/02.jpg')} style={this.state.aturgambar} alt="img"/>
          </div>
        </div>
        <div className="block-4">
          <div className="photo-booth">
            <img src={require('../img/03.jpg')} style={this.state.aturgambar} alt="img"/>
          </div>
        </div>
        <div className="block-4">
          <div className="photo-booth">
            <img src={require('../img/04.jpg')} style={this.state.aturgambar} alt="img"/>
          </div>
        </div>
        <div className="block-4">
          <div className="photo-booth">
            <img src={require('../img/05.jpg')} style={this.state.aturgambar} alt="img"/>
          </div>
        </div>
        <div className="block-4">
          <div className="photo-booth">
            <img src={require('../img/06.jpg')} style={this.state.aturgambar} alt="img"/>
          </div>
        </div>
        <div className="block-4">
          <div className="photo-booth">
            <img src={require('../img/07.jpg')} style={this.state.aturgambar} alt="img"/>
          </div>
        </div>
        <div className="block-4">
          <div className="photo-booth">
            <img src={require('../img/08.jpg')} style={this.state.aturgambar} alt="img"/>
          </div>
        </div>

        <div className="clear-left">
        </div>

      </div>
    )
  }
}

export default Gallery
