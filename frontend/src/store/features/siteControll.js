import { createSlice } from "@reduxjs/toolkit/";
const initialState = {
  navBar: false,
  theme: "dark",
  loader: true,
  notification: {
    msg: "",
    tout: 0,
    vis: false,
  },
  popup: {
    creteacc: true,
  },
};

const auth = createSlice({
  name: "siteControll",
  initialState,
  reducers: {
    setNav: (state, action) => {
      return { ...state, navBar: action.payload };
    },
    setTheme: (state, action) => {
      return { ...state, theme: action.payload };
    },
    setLoader: (state, action) => {
      return { ...state, loader: action.payload };
    },
    setNoti: (state, action) => {
      return {
        ...state,
        notification: {
          msg: action.payload.msg,
          tout: action.payload.tout,
          vis: action.payload.vis,
        },
      };
    },
    setMsgbar: (state, action) => {
      return { ...state, msgBar: action.payload };
    },
    setChatroom: (state, action) => {
      return {
        ...state,
        chatArea: {
          status: action.payload.status,
          name: action.payload.name,
          roomid: action.payload.roomid,
        },
      };
    },
    clearChatroom: (state) => {
      return {
        ...state,
        chatArea: {
          status: false,
          name: null,
          roomid: null,
        },
      };
    },
  },
});

export default auth.reducer;
export const {
  setNav,
  setMsgbar,
  setTheme,
  setLoader,
  setNoti,
  setChatroom,
  clearChatroom,
} = auth.actions;
