import React, { createContext } from 'react';

export const CommentsContext = createContext();

export const CommentsProvider = (props) => {
  return (
    <CommentsContext.Provider value={props.value}>
      {props.children}
    </CommentsContext.Provider>
  )
}