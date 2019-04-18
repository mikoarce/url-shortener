import React from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import StringUtil from 'util/string-util';

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
      message: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    const { url } = this.state;

    if (StringUtil.isUrl(url)) {
      this.setState({ status: Status.SUCCESS });
    } else {
      this.setState({
        status: Status.ERROR,
        message: `"${url}" is not a valid URL`,
      });
    }
  }

  handleChange(_, { name, value }) {
    this.setState({[name]: value});
  }

  render() {
    const { url, status, message } = this.state;

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
            width={14}
          />
          <Form.Button
            primary
            label="&nbsp;"
            content="Shorten"
            disabled={url.length === 0}
          />
        </Form.Group>
        <Message success header="Success" content="Your shortened link is: http://link.com" />
        <Message error header="Error" content={message} />
      </Form>
    );
  }
}

export default UrlShortener;
