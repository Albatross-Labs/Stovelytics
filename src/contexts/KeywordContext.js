import React, { createContext } from 'react';

export const KeywordContext = createContext();

export const KeywordProvider = (props) => {
  return (
    <KeywordContext.Provider value={props.value}>
      {props.children}
    </KeywordContext.Provider>
  )
}