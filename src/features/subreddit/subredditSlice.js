import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async () => {
    const response = await fetch("https://api.reddit.com/subreddits?limit=20");
    const data = await response.json();
    console.log(data.data.children);
    return data.data.children;
    // const newSubreddits = data.data.children.map(subreddit => {
    //     const {
    //         banner_img,
    //         icon_img,
    //         display_name_prefixed,
    //         title,
    //         id,
    //         public_description,
    //         url,
    //         subscriber
    //     } = subreddit.data
    //     return {
    //         bannerImg: banner_img,
    //         iconImg: icon_img,
    //         subreddit: display_name_prefixed,
    //         title: title,
    //         userId: id,
    //         description: public_description,
    //         url: url,
    //         subscriber: subscriber
    //     }
    // });
    // newSubreddits.shift();

    // return newSubreddits;
  }
);

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newSubreddits = action.payload.map(subreddit => {
              const {
                  banner_img,
                  icon_img,
                  display_name_prefixed,
                  title,
                  id,
                  public_description,
                  url,
                  subscriber
              } = subreddit.data
              return {
                  bannerImg: banner_img,
                  iconImg: icon_img,
                  subreddit: display_name_prefixed,
                  title: title,
                  userId: id,
                  description: public_description,
                  url: url,
                  subscriber: subscriber
              }
          });
          newSubreddits.shift();
          state.subreddits = newSubreddits;
      })

      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
  
});


export default subredditsSlice.reducer;
export const selectAllSubreddits = (state) => state.subreddit.subreddits;
export const getStatus = (state) => state.subreddit.status;
export const getError = (state) => state.subreddit.error;
