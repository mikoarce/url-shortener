import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Header, Segment, Divider, Grid,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Tabs from './Tabs';

export class Welcome extends React.Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  render() {
    return (
      <Grid verticalAlign="middle" columns={1} centered>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Header>
                URL Shortener and Analytics
                <Header.Subheader>
                  Shorten your URL and view some analytics.
                </Header.Subheader>
              </Header>
              <Divider />
              <Tabs />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect()(Welcome);
