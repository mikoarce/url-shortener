import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Input, Icon, Header } from 'semantic-ui-react';

const AnalyticsPlaceholder = ({ onChange, onSubmit }) => (
  <Segment placeholder>
    <Header icon>
      <Icon name="exclamation" />
      Enter link below to fetch information.
    </Header>
    <Input
      name="url"
      size="small"
      action={{ icon: 'search', onClick: onSubmit }}
      placeholer="Enter URL"
      onChange={onChange}
    />
  </Segment>
);

AnalyticsPlaceholder.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AnalyticsPlaceholder;
