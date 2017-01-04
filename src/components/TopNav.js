require('normalize.css/normalize.css');
require('styles/Base.scss');
require('styles/TopNav.scss');

import React from 'react';
//import ReactDOM from 'react-dom';

const TopNav = React.createClass({
  render () {
    return (
      <nav>
        <ul>
          <li>111</li>
          <li>222</li>
          <li>333</li>
          <li>444</li>
          <li>555</li>
          <li>666</li>
          <li>6663333</li>
        </ul>
      </nav>
    )
  }
})

export default TopNav
