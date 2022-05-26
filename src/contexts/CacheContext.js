import React, { createContext } from 'react';

export const CacheContext = createContext();

export const CacheProvider = (props) => {
  return (
    <CacheContext.Provider value={props.value}>
      {props.children}
    </CacheContext.Provider>
  )
}