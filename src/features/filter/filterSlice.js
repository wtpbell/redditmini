import React from 'react';
import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const filterPosts = createSlice(
    'filter/filterPosts', 
    async (filter) => {
        const result = await fetch(`https://api.reddit.com/subreddits/${filter}`);
        const data = await result.json();
        return data.data.children;
    }
);

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filters: ['hot', 'new', 'top'],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(filterPosts.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(filterPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            
        })
        .addCase(filterPosts.rejected, (state, action) => {
            state.status = 'failed'

        })
    }
})

export default filterSlice.reducer;