import {
  GETPRODUCTS,
  GETTSHERT,
  GETPONTALON,
  GETSHEMISE,
  GETCOSTUME,
  GETVEST,
  GETSHESURE,
  GETEDITIONLIMITER,
} from "../Actions/ProductAction";

const initialState = {
  products: [],
  Tshert: [],
  Pantalon: [],
  Chemise: [],
  Costume: [],
  Vest: [],
  Sheseur: [],
  EditionLimiter: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GETPRODUCTS:
      return { ...state, products: payload };
    case GETTSHERT:
      return { ...state, Tshert: payload };
    case GETPONTALON:
      return { ...state, Pantalon: payload };
    case GETSHEMISE:
      return { ...state, Chemise: payload };
    case GETCOSTUME:
      return { ...state, Costume: payload };
    case GETVEST:
      return { ...state, Vest: payload };
    case GETSHESURE:
      return { ...state, Sheseur: payload };
    case GETEDITIONLIMITER:
      return { ...state, EditionLimiter: payload };
    default:
      return state;
  }
};
