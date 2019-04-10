import React, {Component} from 'react';
import './ImageCarousel.css'


class ImageCarousel extends Component{
  constructor(){
    super()
    this.state ={

    }
  }

  render(){
    return(
      <div>
        <div class="wrapper-carousel">
          <img src={require('../img/img_mountains_wide.jpg')} alt="logo"/>
        </div>
      </div>
    )
  }
}

export default ImageCarousel
