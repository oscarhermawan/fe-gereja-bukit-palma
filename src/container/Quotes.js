import React, {Component} from 'react';
import './Quotes.css'

class Quotes extends Component{
  render(){
    return(
      <div className="quote-background">
        <div className="quote-wrapper">
          <div className="quote">
            <span>Ayat Emas Hari ini</span><br/><br/>
            &quot;
            <p>4 One thing I ask from the LORD, this only do I seek: that I may dwell in the house of the LORD all the days of my life, to gaze on the beauty of the LORD and to seek him in his temple.
            </p>
            <i>Matius 1:1</i>
          </div>
        </div>
        <div className="clear-left">
        </div>
      </div>
    )
  }
}


export default Quotes
