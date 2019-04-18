import React from 'react';
import {
  Header, Segment, Divider, Grid,
} from 'semantic-ui-react';
import Tabs from './Tabs';

const Welcome = () => (
  <Grid centered padded="horizontally">
    <Grid.Row>
      <Grid.Column>
        <Segment>
          <Header>
            URL Shortener and Analytics
            <Header.Subheader>
              Shorten your URL and view mocked analytics.
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
