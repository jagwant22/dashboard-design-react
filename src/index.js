import React from 'react';
import ReactDOM from 'react-dom';
import './sidebar.css';
import PendingComponent from './PendingComponent' ;
import CurrentTableDetails from './CurrentTableDetails.js';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import brand_logo from './static/img/caret.png';

ReactDOM.render(
  <PendingComponent value='1' />,
  document.getElementById('orderHolder')
);
ReactDOM.render(
  <TopNav />, document.getElementById('topNav')
);
ReactDOM.render(
  <CurrentTableDetails />, document.getElementById('currentTableDetails')
);
