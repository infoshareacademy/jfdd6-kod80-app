var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

// CSS Modules, react-datepicker-cssmodules.css
// require('react-datepicker/dist/react-datepicker-cssmodules.css');

const datePicker = React.createClass({
  displayName: 'Example',

  getInitialState: function() {
    return {
      startDate: moment(),
      endDate: moment()
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
      setStartDate,
      } = this.props


    return (
      <div>
          <DatePicker
            selected={this.state.startDate}
            selectsStart  startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart} />
          <DatePicker
            selected={this.state.endDate}
            selectsEnd  startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd} />
        </div>
    )
  }
});

export default datePicker