import React from 'react';
import { Tab } from 'semantic-ui-react';
import UrlShortener from 'views/UrlShortener';
import UrlAnalytics from 'views/UrlAnalytics';

const renderUrlShortener = () => <Tab.Pane><UrlShortener /></Tab.Pane>;

const renderUrlAnalytics = () => <Tab.Pane><UrlAnalytics /></Tab.Pane>;

const panes = [
  { menuItem: 'Shortener', render: renderUrlShortener },
  { menuItem: 'Analytics', render: renderUrlAnalytics },
];

const Tabs = () => <Tab panes={panes}/>

export default Tabs;
