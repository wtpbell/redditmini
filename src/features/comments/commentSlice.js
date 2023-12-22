import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import formatTimeStamp from "../../utilities/formatTimeStamp";
import abbrNum from "../../utilities/abbrNum";

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (postId) => {
        const response = await fetch(`https://api.reddit.com/comments/${postId}`)
        const data = await response.json();
        // console.log(data[1].data.children);
        return data[1].data.children;
    }
)

const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchComments.pending, state => {
                state.status = 'pending'
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const allComments = action.payload.map(comment => {
                    const {
                        author,
                        created_utc,
                        id,
                        link_id,
                        replies,
                        body,
                        
                    } = comment.data;
                    return {
                        author: author,
                        time: created_utc,
                        id: id,
                        // postId: link_id.substr(3),
                        replies: replies,
                        body: body,
                       
                    }
                })
                state.comments = allComments;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failded';
                state.error = action.error.message 
            })
    }
})

export default commentSlice.reducer;
export const getComments = state => state.comments.comments;
export const getStatus = state => state.comments.status;
export const getError = state => state.comments.error;