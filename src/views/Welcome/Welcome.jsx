import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Header, Segment, Divider, Grid,
} from 'semantic-ui-react';
import Tabs from './Tabs';

const Welcome = () => (
<Grid verticalAlign="middle" columns={1} centered>
  <Grid.Row>
    <Grid.Column>
      <Segment>
        <Header>
          URL Shortener and Analytics
          <Header.Subheader>
            Shorten your URL and view some analytics (analytics are mocked).
          </Header.Subheader>
        </Header>
        <Divider />
        <Tabs />
      </Segment>
    </Grid.Column>
  </Grid.Row>
</Grid>
);

export default Welcome;
