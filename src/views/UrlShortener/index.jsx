import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class UrlShortener extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('TODO');
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input label="URL" placeholder="Enter link" />
          <Form.Button primary label="&nbsp;" content="Shorten URL" />
        </Form.Group>
      </Form>
    );
  }
}

export default UrlShortener;
