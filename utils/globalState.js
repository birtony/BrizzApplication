/* eslint-disable default-case */
import * as types from '../actions/types';

// eslint-disable-next-line complexity
export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN_USERNAME_CHANGED:
      return {
        ...state,
        user: { ...state.user, email: action.payload },
      };
    case types.LOGIN_PASSWORD_CHANGED:
      return {
        ...state,
        user: { ...state.user, password: action.payload },
      };
    case types.LOGGED_IN:
      return {
        ...state,
        token: action.payload.token,
      };
    case types.SIGNUP_PASSWORD_CHANGED:
      return {
        ...state,
        user: { ...state.user, signup_password: action.payload },
      };
    case types.SIGNUP_PASSWORDCONF_CHANGED:
      return {
        ...state,
        user: { ...state.user, signup_passwordConf: action.payload },
      };
    case types.SIGNED_UP:
      return {
        ...state,
        token: action.payload.token,
        user: {
          ...state.user,
          signup_password: '',
          signup_passwordConf: '',
        },
      };
    case types.LOGGED_OUT:
      return {
        ...state,
        token: '',
        user: {
          ...state.user,
          password: '',
        },
      };
    case types.FIRST_NAME_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.payload,
        },
      };
    case types.LAST_NAME_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          lastName: action.payload,
        },
      };
    case types.BIRTH_DATE_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          birthDate: action.payload,
        },
      };
    case types.CITY_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          city: action.payload,
        },
      };
    case types.GPA_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          gpa: action.payload,
        },
      };
    case types.GENDER_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          gender: action.payload,
        },
      };
    case types.PROGRAMS_RECEIVED:
      return {
        ...state,
        programs: [
          {
            ...state.programs,
            id: action.payload._id,
            name: action.payload.name,
            address: action.payload.address,
            location: {
              lat: action.payload.location.lat,
              lon: action.payload.location.lon,
            },
            email: action.payload.email,
            phone: action.payload.phone,
            yearlyCost: action.payload.yearlyCost,
            description: action.payload.description,
            requiredIelts: action.payload.requiredIelts,
            requiredGpa: action.payload.requiredGpa,
            interests: [
              {
                accounting: action.payload.accounting,
                administration: action.payload.administration,
                acting: action.payload.acting,
                arts: action.payload.arts,
                aviation: action.payload.aviation,
                broadcasting: action.payload.broadcasting,
                business: action.payload.business,
                chemistry: action.payload.chemistry,
                civilEngineering: action.payload.civilEngineering,
                computerNetworking: action.payload.computerNetworking,
                cosmetics: action.payload.cosmetics,
                legal: action.payload.legal,
                programming: action.payload.programming,
                childhoodEducation: action.payload.childhoodEducation,
                electronics: action.payload.electronics,
                fashion: action.payload.fashion,
                fireProtection: action.payload.fireProtection,
                fitness: action.payload.fitness,
                flightServices: action.payload.flightServices,
                hospitality: action.payload.hospitality,
                mediaDesign: action.payload.mediaDesign,
                journalism: action.payload.journalism,
                justice: action.payload.justice,
                law: action.payload.law,
                mechanicalEngineering: action.payload.mechanicalEngineering,
                opticianry: action.payload.opticianry,
                paralegal: action.payload.paralegal,
                photography: action.payload.photography,
                police: action.payload.police,
                nursing: action.payload.nursing,
                socialService: action.payload.socialService,
                tourism: action.payload.tourism,
                veterinary: action.payload.veterinary,
              },
            ],
          },
        ],
      };
    case types.default:
      return state;
  }
};

export const initialState = {
  token: '',
  user: {
    email: '',
    password: '',
    signup_password: '',
    signup_passwordConf: '',
    statusActivated: false,
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    city: '',
    gpa: '',
    gender: '',
    complete: false,
  },
  programs: [
    {
      id: 0,
      name: '',
      address: '',
      location: {
        lat: 0,
        lon: 0,
      },
      email: '',
      phone: '',
      yearlyCost: 0,
      description: '',
      requiredIelts: 0,
      requiredGpa: 0,
      interests: [
        {
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
          veterinary: false,
        },
      ],
    },
  ],
};
