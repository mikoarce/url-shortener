import 'semantic-ui-css/components/menu.css';
import 'semantic-ui-css/components/site.css';
import 'semantic-ui-css/components/transition.css';
import 'semantic-ui-css/components/reset.css';
import 'styles/main.css';
import React from 'react';
import {
  render,
} from 'react-dom';
import Router from 'app/Router';

render(<Router />, document.getElementById('app'));
