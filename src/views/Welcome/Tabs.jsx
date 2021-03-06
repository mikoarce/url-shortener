import React from 'react';
import { Tab } from 'semantic-ui-react';
import UrlShortener from 'components/UrlShortener';
import UrlAnalytics from 'components/UrlAnalytics';
import 'styles/tabs.css';

const renderUrlShortener = () => <Tab.Pane className="fixed-size"><UrlShortener /></Tab.Pane>;

const renderUrlAnalytics = () => <Tab.Pane><UrlAnalytics /></Tab.Pane>;

const panes = [
  { menuItem: 'Shortener', render: renderUrlShortener },
  { menuItem: 'Analytics', render: renderUrlAnalytics },
];

const Tabs = () => <Tab panes={panes} />;

export default Tabs;
