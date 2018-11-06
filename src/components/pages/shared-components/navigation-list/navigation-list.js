import React from 'react';

import './navigation-list.css';
import NavigationListItem from '../navigation-list-item';

const NavigationList = ({ navItems }) => {

  return (
    <ul className="navigation-list">
      {
        navItems.map((item) => {
        return <NavigationListItem item = {item} key = {item.label} />;
      })
      }
    </ul>
  );
}
export default NavigationList;
