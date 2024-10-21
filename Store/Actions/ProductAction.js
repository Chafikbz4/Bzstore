import axios from "axios";

// Define your action type
export const GETPRODUCTS = "GETPRODUCTS";
export const GETTSHERT = "GETTSHERT";
export const GETPONTALON = "GETPONTALON";
export const GETSHEMISE = "GETSHEMISE";
export const GETCOSTUME = "GETCOSTUME";
export const GETVEST = "GETVEST";
export const GETSHESURE = "GETSHESURE";
export const GETEDITIONLIMITER = "GETEDITIONLIMITER";

// Async action to fetch products
export const GetProduct = () => {
  return async (dispatch) => {
    try {
      // Await the axios call to properly handle the async nature of the request
      const data = await axios.get("https://dummyjson.com/products");
      const result = data.data.products.slice(0, 5);
      // Dispatch the action with the fetched data
      dispatch({
        type: GETPRODUCTS,
        payload: result,
      });
    } catch (error) {
      console.log(error); // Handle errors if any occur during the request
    }
  };
};
export const GetTshert = () => {
  return async (dispatch) => {
    try {
      // Await the axios call to properly handle the async nature of the request
      const data = await axios.get("https://dummyjson.com/products");
      const result = data.data.products.slice(6, 10);
      // Dispatch the action with the fetched data
      dispatch({
        type: GETTSHERT,
        payload: result,
      });
    } catch (error) {
      console.log(error); // Handle errors if any occur during the request
    }
  };
};

export const GetPontalon = () => {
  return async (dispatch) => {
    try {
      // Await the axios call to properly handle the async nature of the request
      const data = await axios.get("https://dummyjson.com/products");
      const result = data.data.products.slice(10, 15);
      // Dispatch the action with the fetched data
      dispatch({
        type: GETPONTALON,
        payload: result,
      });
    } catch (error) {
      console.log(error); // Handle errors if any occur during the request
    }
  };
};

export const GetShemise = () => {
  return async (dispatch) => {
    try {
      // Await the axios call to properly handle the async nature of the request
      const data = await axios.get("https://dummyjson.com/products");
      const result = data.data.products.slice(15, 20);
      // Dispatch the action with the fetched data
      dispatch({
        type: GETSHEMISE,
        payload: result,
      });
    } catch (error) {
      console.log(error); // Handle errors if any occur during the request
    }
  };
};

export const GetCostuume = () => {
  return async (dispatch) => {
    try {
      // Await the axios call to properly handle the async nature of the request
      const data = await axios.get("https://dummyjson.com/products");
      const result = data.data.products.slice(20, 23);
      // Dispatch the action with the fetched data
      dispatch({
        type: GETCOSTUME,
        payload: result,
      });
    } catch (error) {
      console.log(error); // Handle errors if any occur during the request
    }
  };
};

export const GetVest = () => {
  return async (dispatch) => {
    try {
      // Await the axios call to properly handle the async nature of the request
      const data = await axios.get("https://dummyjson.com/products");
      const result = data.data.products.slice(23, 26);
      // Dispatch the action with the fetched data
      dispatch({
        type: GETVEST,
        payload: result,
      });
    } catch (error) {
      console.log(error); // Handle errors if any occur during the request
    }
  };
};

export const GetSheseur = () => {
  return async (dispatch) => {
    try {
      // Await the axios call to properly handle the async nature of the request
      const data = await axios.get("https://dummyjson.com/products");
      const result = data.data.products.slice(26, 28);
      // Dispatch the action with the fetched data
      dispatch({
        type: GETSHESURE,
        payload: result,
      });
    } catch (error) {
      console.log(error); // Handle errors if any occur during the request
    }
  };
};

export const GetEditionLimiter = () => {
  return async (dispatch) => {
    try {
      // Await the axios call to properly handle the async nature of the request
      const data = await axios.get("https://dummyjson.com/products");
      const result = data.data.products.slice(28, 30);
      // Dispatch the action with the fetched data
      dispatch({
        type: GETEDITIONLIMITER,
        payload: result,
      });
    } catch (error) {
      console.log(error); // Handle errors if any occur during the request
    }
  };
};
