import { configureStore } from "@reduxjs/toolkit";
import apilist from "./features/apilist";
import siteControl from "./features/siteControll.js";
const store = configureStore({
   reducer:{
    apilist : apilist,
    sitecontrol : siteControl,
   }
})

export default store;