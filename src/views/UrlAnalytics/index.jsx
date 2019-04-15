import React from 'react';
import { Segment, Input, Icon, Header } from 'semantic-ui-react';

class UrlAnalytics extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
    };

    this.handleGetUrlAnalytics = this.handleGetUrlAnalytics.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleGetUrlAnalytics() {
    const { url } = this.state;
    console.log(url);
  }

  handleChange(_, { name, value }) {
    this.setState({[name]: value});
  }

  render() {
    return (
      <Segment placeholder >
        <Header icon>
          <Icon name="exclamation" />
          Enter link below to fetch information.
        </Header>
        <Input
          name="url"
          size="small"
          action={{ icon: 'search', onClick: this.handleGetUrlAnalytics }}
          placeholder="Enter URL"
          onChange={this.handleChange}
        />
      </Segment>
    );
  }
}

export default UrlAnalytics;
