import React, {Component} from 'react';
import './BoxWarta.css'
import './Style.css';

class BoxWarta extends Component{
  constructor(){
    super()
    this.state = {
      left: 0,
      originalOffset: 0,
      velocity: 0,
      timeOfLastDragEvent: 0,
      touchStartX: 0,
      prevTouchX: 0,
      beingTouched: false,
      height: 0,
      intervalId: null
    };
  }

  // componentDidMount() {
  //   window.setTimeout(() => this.setState({height: 65}), 50);
  // }
  //
  // handleMove(clientX) {
  //   if (this.state.beingTouched) {
  //     const touchX = clientX;
  //     const currTime = Date.now();
  //     const elapsed = currTime - this.state.timeOfLastDragEvent;
  //     const velocity = 20 * (touchX - this.state.prevTouchX) / elapsed;
  //     let deltaX = touchX - this.state.touchStartX + this.state.originalOffset;
  //     if (deltaX < -350) {
  //       this.handleRemoveSelf();
  //     } else if (deltaX > 0) {
  //       deltaX = 0;
  //     }
  //     this.setState({
  //       left: deltaX,
  //       velocity,
  //       timeOfLastDragEvent: currTime,
  //       prevTouchX: touchX
  //     });
  //   }
  // }
  //
  oke(mouseDownEvent) {
    alert('oke')
    // mouseDownEvent.preventDefault();
    // this.handleStart(mouseDownEvent.clientX);
  }
  //
  // handleMouseMove(mouseMoveEvent) {
  //  this.handleMove(mouseMoveEvent.clientX);
  // }
  //
  // handleMouseUp() {
  //   this.handleEnd();
  // }
  //
  // handleMouseLeave() {
  //   this.handleMouseUp();
  // }

  render(){
    return(
      <div className="block-3"
        onMouseDown={mouseDownEvent => this.oke(mouseDownEvent)}
      >
        <div className="box-content">
          <img src={require('../img/img_mountains_wide.jpg')} width="100%" alt="img"/>
          <h2>Judul lagi dimana </h2>
          <h3>SEPTEMBER 9, 2016</h3>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>
        </div>
      </div>
    )
  }
}

export default BoxWarta;
