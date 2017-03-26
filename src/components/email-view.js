import React from 'react'
import {Grid} from 'react-bootstrap'


class EmailForm extends Component {
  render () {

    return (
      <Grid>
        <form method="post" name="contact_form"
              action="contact-form-handler.php">
          Your Name:
          <input type="text" name="name"/>
            Email Address:
            <input type="text" name="email"/>
              Message:
              <textarea name="message"></textarea>
              <input type="submit" value="Submit"/>
        </form>
      </Grid>
    )
  }
}

export default EmailForm