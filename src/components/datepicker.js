var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

// CSS Modules, react-datepicker-cssmodules.css
// require('react-datepicker/dist/react-datepicker-cssmodules.css');

var Example = React.createClass({
  displayName: 'Example',

  getInitialState: function() {
    return {
      startDate: moment()
    };
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });
  },

  render: function() {
    return <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange} />;
  }
});