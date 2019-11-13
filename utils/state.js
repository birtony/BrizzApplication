import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

const initialState = {
  state: {
    programs: [],
    user: {
      email: "",
      password: "",
      statusActivated: false,
      activationCode: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      complete: false,
      lastUse: new Date(0),
      interests: {
        accounting: false,
        administration: false,
        acting: false,
        arts: false,
        aviation: false,
        broadcasting: false,
        business: false,
        chemistry: false,
        civilEngineering: false,
        computerNetworking: false,
        cosmetics: false,
        legal: false,
        programming: false,
        childhoodEducation: false,
        electronics: false,
        fashion: false,
        fireProtection: false,
        fitness: false,
        flightServices: false,
        hospitality: false,
        mediaDesign: false,
        journalism: false,
        justice: false,
        law: false,
        mechanicalEngineering: false,
        opticianry: false,
        paralegal: false,
        photography: false,
        police: false,
        nursing: false,
        socialService: false,
        tourism: false,
        veterinary: false
      },
      ielts: -1,
      international: false,
      originCountry: "",
      yearBudget: "UNDEFINED"
    }
  }
};

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
