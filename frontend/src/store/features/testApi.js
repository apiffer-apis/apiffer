import { createSlice } from "@reduxjs/toolkit/";
const initialState = {
  apiurl: '',
  response: ''
};

const apiTest= createSlice({
  name: "apiTest",
  initialState,
  reducers: {
    setApitesturl: (state, action) => {
      return { ...state, apiurl: action.payload };
    }
  },
});

export default apiTest.reducer;
export const {
    setApitesturl
} = apiTest.actions;
