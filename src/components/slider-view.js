import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import '../styles/styles.css'



class HorizontalSlider extends Component {
  render () {
    const { value, min, max, onChange } = this.props
    return (
      <div className='slider'>
        <Slider
          min={min}
          max={max}
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }
}

export default HorizontalSlider