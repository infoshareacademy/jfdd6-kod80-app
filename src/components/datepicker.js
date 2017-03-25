var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

// import {ControlLabel, FormGroup} from 'react-bootstrap'

require('react-datepicker/dist/react-datepicker.css');

// CSS Modules, react-datepicker-cssmodules.css
// require('react-datepicker/dist/react-datepicker-cssmodules.css');

const datePicker = React.createClass({
  displayName: 'Example',

  getInitialState: function() {
    return {
      startDate: null,
      endDate: null
    };
  },

  handleChangeStart: function(date) {
    this.setState({
      startDate: date,
    });
  },

  handleChangeEnd: function(date) {
    this.setState({
      endDate: date,
    });
  },



  render: function() {

    const {
      setDateSinceSearch,
      setDateToSearch
      } = this.props

    const onChangeStart = (momentJSdate) => {
      this.handleChangeStart(momentJSdate)
      setDateSinceSearch(momentJSdate.toDate())
    }

    const onChangeEnd= (momentJSdate) => {
      this.handleChangeEnd(momentJSdate)
      setDateToSearch(momentJSdate.toDate())
    }

    return (
      <div>
        <span><strong>od: </strong></span>
          <DatePicker
            selected={this.state.startDate}
            selectsStart  startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={onChangeStart} />
        <div></div>
        <span><strong>do: </strong></span>
          <DatePicker
            selected={this.state.endDate}
            selectsEnd  startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={onChangeEnd} />
        </div>
    )
  }
});

export default datePicker