import { createSlice } from "@reduxjs/toolkit/";
const initialState = {
  apis: [],
};

const apidata = createSlice({
  name: "apiControll",
  initialState,
  reducers: {
    setApi: (state, action) => {
      return { ...state, apis: [...state.apis, action.payload] };
    },
    removeApi: (state, action) => {
      let arrsize = state.apis.length;
      let a = state.apis.slice(0, action.payload);
      let b = state.apis.slice(action.payload + 1, arrsize);

      return { ...state, apis: [...a.concat(b)] };
    },
  },
});

export default apidata.reducer;
export const { setApi, removeApi } = apidata.actions;
