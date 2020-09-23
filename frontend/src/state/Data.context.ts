import React from 'react';

const INITIAL_STATE = {
  categoriesReady: false,
  toggleCategoriesReady: () => {},
};

export default React.createContext(INITIAL_STATE);
