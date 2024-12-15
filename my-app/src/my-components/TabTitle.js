// File: src/my-components/TabTitle.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import tabTitles from '../my-data/tabTitles'; // Import the mapping

const TabTitle = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = tabTitles[location.pathname] || 'Default Title';
  }, [location]);

  return null; // This component doesn't render anything
};

export default TabTitle;
