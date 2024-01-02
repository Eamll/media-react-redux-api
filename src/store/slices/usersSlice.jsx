import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
    },
    reducers: {
        add: (state, action) => {
            state.data.push(action.payload);
        },
        remove: (state, action) => {
            state.data = state.data.filter((user) => user.id !== action.payload);
        },
        update: (state, action) => {
            const index = state.data.findIndex((user) => user.id === action.payload.id);
            state.data[index] = action.payload;
        },
    },
});

export const usersReducer = usersSlice.reducer;