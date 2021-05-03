import React from 'react';

export const SelectedEntitiesContext = React.createContext({
  expenses: [],
  incomes: [],
  liabilities: [],
  assets: [],
});
