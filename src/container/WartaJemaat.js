import React, {Component} from 'react';
import BoxWarta from './BoxWarta';
import './WartaJemaat.css';


class WartaJemaat extends Component{
  constructor(){
    super()
    this.state = {
      angka_saja : [0,1,2]
    }
  }

  render(){
    return(
      <div className="news-event-wrapper">
        <h2>Event Selanjutnya</h2>
        <div className="garis-bawah">
        </div>
        <div className="news-event-3-box">
          {this.state.angka_saja.map((nilai)=>(
            <BoxWarta />
          ))}
          <div className="clear-left">
          </div>
        </div>
      </div>
    )
  }
}

export default WartaJemaat
