import React from 'react';
import AnalyticsPlaceholder from './AnalyticsPlaceholder';

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
      <AnalyticsPlaceholder
        onSubmit={this.handleGetUrlAnalytics}
        onChange={this.handleChange}
      />
    );
  }
}

export default UrlAnalytics;
