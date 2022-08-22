import { createSlice } from "@reduxjs/toolkit/";
const initialState = {
  apis: [],
};

const apidata = createSlice({
  name: "apiControll",
  initialState,
  reducers: {
    setApi: (state, action) => {
      return { ...state, apis:[...state.apis,action.payload ]};
    },
    removeApi: (state, action) => {
      

      return {...state,apis: [...action.payload]};
    }
  },
});

export default apidata.reducer;
export const {
  setApi,
  removeApi
} = apidata.actions;
