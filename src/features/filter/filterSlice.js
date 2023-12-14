import React from 'react';
import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const filterSubreddit = createAsyncThunk(
    'filter/filterSubreddit', 
    async (filter) => {
        const result = await fetch(`https://api.reddit.com/${filter}`);
        const data = await result.json();
        // console.log(data.data.children);
        return data.data.children
  
    }
);

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        selectedFilter: 'hot',
        filterResult: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    },
    reducers:{
        changeFilter: (state, action) => {
            const {nameOfFilter} = action.payload;
            state.selectedFilter = nameOfFilter;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(filterSubreddit.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(filterSubreddit.fulfilled, (state, action) => {
            state.status = 'succeeded'
            const posts = action.payload.map(post => {
                const {
                    author, 
                    subreddit_name_prefixed, 
                    num_comments, 
                    created_utc, 
                    id, 
                    selftext, 
                    title,  
                    url
                } = post.data;
                return {
                    author: author,
                    subreddit: subreddit_name_prefixed,
                    numOfComments: num_comments,
                    time: created_utc,
                    id: id, 
                    text: selftext? selftext: null,
                    title: title,
                    image: (url.includes('.jpg') || url.includes('.png'))? url : null
                }
            });
            state.filterResult = posts;
        })
        .addCase(filterSubreddit.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message;
        })
    }
})

export const {changeFilter} = filterSlice.actions;
export const selectedFilter = (state) => state.filter.selectedFilter;
export const filteredResult = (state) => state.filter.filterResult;
export const selectedStatus = (state) => state.filter.status;
export default filterSlice.reducer;