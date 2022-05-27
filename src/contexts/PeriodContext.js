import React, { createContext } from 'react';

export const PeriodContext = createContext();

export const PeriodProvider = (props) => {
  return (
    <PeriodContext.Provider value={props.value}>
      {props.children}
    </PeriodContext.Provider>
  )
}