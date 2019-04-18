import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Input, Icon, Header } from 'semantic-ui-react';
import { timingSafeEqual } from 'crypto';

class AnalyticsPlaceholder extends React.PureComponent {
  static get propTypes() {
    return {
      onSubmit: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    const { url } = this.state;

    if (onSubmit) {
      onSubmit(url);
    }
  }

  handleChange(_, { name, value }) {
    this.setState({[name]: value});
  }

  render() {
    const { url } = this.state;

    return (
      <Segment placeholder>
        <Header icon>
          <Icon name="exclamation" />
          Enter link below to fetch information.
        </Header>
        <Input
          name="url"
          size="small"
          value={url}
          action={{ icon: 'search', onClick: this.handleSubmit }}
          placeholer="Enter URL"
          onChange={this.handleChange}
        />
      </Segment>
    );
  }
}

export default AnalyticsPlaceholder;
