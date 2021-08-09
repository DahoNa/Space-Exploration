import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'
import ky from 'ky'
import qs from 'qs'

export const GlobalContext = React.createContext();

const GlobalProvider = (props) => {

  const client = ky.create({
    prefixUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers'
  })
  
  const createUrl = ({ rover, ...params }) =>
    `${rover}/photos?${qs.stringify({
      api_key: 'OogoTGP9ShJcA0SmE6xecPLc9IjaaQz1kNSP8qh8',
      ...params
    })}`
  
  const api = {
    photos: {
      read: ({ rover, camera, sol, page }) =>
        client
          .get(
            createUrl({
              rover,
              camera,
              sol,
              page
            })
          )
          .json()
    }
  }

  const daho = 'Ok tout baigne'
  
  console.log(GlobalContext)
  return (
      <GlobalContext.Provider value={{daho}}>
        {props.children}
      </GlobalContext.Provider>
  );
};
  
export default GlobalProvider;