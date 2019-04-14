import React from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';

const Status = Object.freeze({
  NONE: Symbol('none'),
  SUCCESS: Symbol('success'),
  ERROR: Symbol('error'),
});

class UrlShortener extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      status: Status.NONE,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    console.log(this.state.url);
  }

  handleChange(_, { name, value }) {
    this.setState({[name]: value});
  }

  render() {
    const { url, status } = this.state;

    return (
      <Form
        onSubmit={this.handleSubmit}
        success={status === Status.SUCCESS}
        error={status === Status.ERROR}
      >
        <Form.Group>
          <Form.Input
            name="url"
            label="URL"
            placeholder="Enter link"
            onChange={this.handleChange}
            value={url}
            width={12}
          />
          <Form.Button
            primary
            label="&nbsp;"
            content="Shorten"
            disabled={url.length === 0}
          />
        </Form.Group>
        <Message success header="Success" content="Success!" />
        <Message error header="Error" content="Error!" />
      </Form>
    );
  }
}

export default UrlShortener;
