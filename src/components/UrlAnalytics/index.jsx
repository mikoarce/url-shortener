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
      clearUrl: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.handleGetUrlAnalytics = this.handleGetUrlAnalytics.bind(this);
  }

  handleGetUrlAnalytics(url) {
    const { fetchUrlInfo } = this.props;

    fetchUrlInfo(url);
  }

  render() {
    const { url, info, clearUrl } = this.props;

    return url.length === 0
      ? <AnalyticsPlaceholder onSubmit={this.handleGetUrlAnalytics} />
      : (
        <AnalyticsTable
          headerMessage={`Analytics Table for: ${url}`}
          info={info}
          onClearUrl={clearUrl}
        />
      );
  }
}

const mapStateToProps = state => ({
  url: state.analytics.url,
  info: state.analytics.info,
});

const mapDispatchToProps = dispatch => ({
  fetchUrlInfo: url => dispatch(analyticsActions.fetchUrlInfo(url)),
  clearUrl: () => dispatch(analyticsActions.clearUrl()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UrlAnalytics);
