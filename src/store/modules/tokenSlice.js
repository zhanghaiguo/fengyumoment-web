import { createSlice } from "@reduxjs/toolkit";

const tokenStore = createSlice({
    name: 'setToken',
    initialState: {
        token: ''
    },
    reducers: {
        setToken(state, actions) {
            state.token = actions.payload
        },
        removeToken: (state) => {
            state.token = null;
        }
        
    }
});

export const { setToken, removeToken } = tokenStore.actions;


export default tokenStore.reducer;

