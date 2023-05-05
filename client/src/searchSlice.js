import { createSlice } from "@reduxjs/toolkit";
import fetchSearch from "./fetchSearch";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    pets: [],
    requestParams: {
      name: "",
      registration_date: "",
      animal: "",
    },
  },
  reducers: {
    updateRequestParams: (state, action) => {
      state.requestParams = action.payload;
    },
    updatePets: (state, action) => {
      state.pets = action.payload;
    },
    fetchPets: {
      reducer: (state) => {
        state.loading = true;
        state.error = null;
      },
      prepare: (requestParams) => ({ payload: { requestParams } }),
    },
    fetchPetsSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.pets = action.payload.data.pets;
    },
    fetchPetsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchPetsAsync = (requestParams) => async (dispatch) => {
  try {
    const { animal, name, registration_date } = requestParams;
    console.log("fetching pets with params:", requestParams);
    dispatch(fetchPets(requestParams));
    const response = await fetchSearch({ animal, name, registration_date });
    console.log("received response:", response);
    const pets = response?.pets ?? [];
    console.log("received pets:", pets);
    dispatch(fetchPetsSuccess({ data: { pets } }));
  } catch (error) {
    console.error("error fetching pets:", error);
    dispatch(fetchPetsFailure(error.toString()));
  }
};

export const {
  updateRequestParams,
  updatePets,
  fetchPets,
  fetchPetsSuccess,
  fetchPetsFailure,
} = searchSlice.actions;

export default searchSlice.reducer;
