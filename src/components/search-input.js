import {FormGroup, ControlLabel,FormControl } from 'react-bootstrap'


const MainSearch = React.createClass({
    getInitialState() {
        return {
            value: ''
        };
    },

    getValidationState() {
        const length = this.state.value.length;
        if (length > 2) return 'success';
        else if (length >= 2) return 'warning';
        else if (length > 0) return 'error';
    },

    handleChange(e) {
        this.setState({ value: e.target.value });
    },

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </form>
        );
    }
});

export default MainSearch
