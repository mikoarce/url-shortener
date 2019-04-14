import React from 'react';
import { Tab } from 'semantic-ui-react';

const renderUrlShortenerPane = () => <Tab.Pane>UrlShortenerPane</Tab.Pane>;

const renderUrlAnalyticsPane = () => <Tab.Pane>UrlAnalyticsPane</Tab.Pane>;

const panes = [
  { menuItem: 'URL Shortener', render: renderUrlShortenerPane },
  { menuItem: 'Url Analytics', render: renderUrlAnalyticsPane },
];

const Tabs = () => <Tab panes={panes}/>

export default Tabs;
