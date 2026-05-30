import { configureStore } from "@reduxjs/toolkit";

import tokenReducer from "./modules/tokenSlice";

const store = configureStore({
    reducer: {
        tokenSlice: tokenReducer
    }
});

export default store;