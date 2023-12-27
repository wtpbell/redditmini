import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchSubreddits = createAsyncThunk(
  'search/searchSubreddits',
  async (keyword) => {
    const response = await fetch(`https://api.reddit.com/search?q=${keyword}&sort=hot`);
    const data = await response.json();
    return data.data.children;
  }
)




const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  }, 
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(searchSubreddits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchSubreddits.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const results = action.payload.map(result=> {
          const {
            author,
            subreddit_name_prefixed,
            num_comments,
            // created_utc, 
            id,
            selftext,
            title,
            subreddit_id,
            subreddit,
            url
          } = result.data;
          return {
            author: author,
            subredditName: subreddit_name_prefixed,
            numOfComments: num_comments,
            // time: formatTimeStamp(created_utc),
            id: id,
            text: selftext ? selftext : null,
            title: title,
            subredditId: subreddit_id,
            subreddit: subreddit,
            image: (url.includes('.jpg') || url.includes('.png') || url.includes('.jpeg')) ? url : null
          };
        });
        state.searchResults = results;
      })
      .addCase(searchSubreddits.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
  }
})

export default searchSlice.reducer;
export const searchOutcome = state => state.search.searchResults;
export const getStatus = state => state.search.status;
export const getError = state => state.search.error;
