import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class SliderView extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: props.initialValue,
      min: props.min,
      max: props.max
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  handleChangeComplete = (e) => {
    console.log('Change event completed')
  }



  render () {
    const { value, min, max } = this.state
    return (
      <div className='slider'>
        <Slider
          min={min}
          max={max}
          value={value}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default SliderView