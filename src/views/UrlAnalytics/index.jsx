import React from 'react';
import { Segment, Input, Icon, Header } from 'semantic-ui-react';

class UrlAnalytics extends React.PureComponent {
  render() {
    return (
      <Segment placeholder >
        <Header icon>
          <Icon name="exclamation" />
          Enter link below to fetch information.
        </Header>
        <Input size="small" action={{ icon: 'search' }} placeholder="Enter URL" />
      </Segment>
    );
  }
}

export default UrlAnalytics;
