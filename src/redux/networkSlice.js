import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isConnected: true,
    type: null,
};

const networkSlice = createSlice({
    name: 'network',
    initialState,
    reducers: {
        updateNetworkStatus: (state, action) => {
            console.log('Payload---', action.payload);
            state.isConnected = action.payload.isConnected;
            state.type = action.payload.type;
        },
    },
});

export const {updateNetworkStatus} = networkSlice.actions;
export default networkSlice.reducer;
