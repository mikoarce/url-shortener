import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as analyticsActions } from 'app/analytics-reducer';
import AnalyticsPlaceholder from './AnalyticsPlaceholder';
import AnalyticsTable from './AnalyticsTable';

class UrlAnalytics extends React.PureComponent {
  static get propTypes() {
    return {
      url: PropTypes.string.isRequired,
      info: PropTypes.arrayOf(PropTypes.object).isRequired,
      fetchUrlInfo: PropTypes.func.isRequired,
    };
  }
  constructor(props) {
    super(props);

    this.state = {
      url: '',
    };

    this.handleGetUrlAnalytics = this.handleGetUrlAnalytics.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleGetUrlAnalytics() {
    const { url: urlInput } = this.state;
    const { fetchUrlInfo } = this.props;

    fetchUrlInfo(urlInput);
  }

  handleChange(_, { name, value }) {
    this.setState({[name]: value});
  }

  render() {
    const { url, info } = this.props;

    return url.length === 0 ? 
      (
        <AnalyticsPlaceholder
          onSubmit={this.handleGetUrlAnalytics}
          onChange={this.handleChange}
        />
      ) : (
        <AnalyticsTable headerMessage={`Analytics Table for URL: ${url}`} info={info}/>
      );
  }
}

const mapStateToProps = state => ({
  url: state.analytics.url,
  info: state.analytics.info,
});

const mapDispatchToProps = dispatch => ({
  fetchUrlInfo: url => dispatch(analyticsActions.fetchUrlInfo(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UrlAnalytics);
