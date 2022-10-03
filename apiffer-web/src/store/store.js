import { configureStore } from "@reduxjs/toolkit";
import apilist from "./features/apilist";
import siteControl from "./features/siteControll.js";
import apiTest from "./features/testApi"
const store = configureStore({
   reducer:{
    apilist : apilist,
    sitecontrol : siteControl,
    api: apiTest

   }
})

export default store;