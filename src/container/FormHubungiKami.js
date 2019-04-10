import React, {Component} from 'react';
import './Style.css'
import '../css/FormHubungiKami.css';

class FormHubungiKami extends Component{
  render(){
    return(
      <div className="form-hubungi-kami-width">
        <div className="block-2-mini">
          <div className="form-hubungi-kami-padding">
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          </div>
        </div>
        <div className="block-2-mini">
          <div className="form-hubungi-kami-padding">
            <input type="text" id="femail" name="firstname" placeholder="Email.." />
          </div>
        </div>
        <div className="clear-left">
        </div>
        <div>
          <div className="form-hubungi-kami-padding">
            <textarea placeholder="Pesan">
            </textarea>
          </div>
        </div>
      </div>
    )
  }
}

export default FormHubungiKami;
