import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import formatTimeStamp from "../../utilities/formatTimeStamp";

export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async () => {
    const response = await fetch("https://api.reddit.com/subreddits?limit=20");
    const data = await response.json();
    // console.log(data.data.children);
    return data.data.children;
  }
);

export const selectedSubreddits = createAsyncThunk(
  "subreddits/selectedSubreddits",
  async (subreddit) => {
    const response = await fetch(`https://api.reddit.com/r/${subreddit}`);
    const result = await response.json();

    return result.data.children;
  }
);

console.log(selectedSubreddits("r/funny"));

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    selectedSubreddits: [],
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
        const newSubreddits = action.payload.map((subreddit) => {
          const {
            banner_img,
            icon_img,
            header_img,
            display_name_prefixed,
            title,
            id,
            public_description,
            url,
            display_name
          } = subreddit.data;
          return {
            bannerImg: banner_img,
            iconImg: icon_img,
            headerImg: header_img,
            subredditName: display_name_prefixed,
            title: title,
            userId: id,
            description: public_description,
            url: url,
            subreddit: display_name
          };
        });
        newSubreddits.shift();
        state.subreddits = newSubreddits;
      })

      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(selectedSubreddits.pending, (state) => {
        state.status = "pending";
      })
      .addCase(selectedSubreddits.fulfilled, (state, action) => {
        state.status = "succeeded";
        const selectedSubreddit = action.payload.map((target) => {
          const {
            author,
            subreddit_name_prefixed,
            num_comments,
            created_utc,
            id,
            selftext,
            title,
            subreddit_id,
            subreddit
          } = target.data;
          return {
            author: author,
            subredditName: subreddit_name_prefixed,
            numOfComments: num_comments,
            time: formatTimeStamp(created_utc),
            id: id,
            text: selftext ? selftext : null,
            title: title,
            subredditId: subreddit_id,
            subreddit: subreddit
          };
        });
        state.selectedSubreddits = selectedSubreddit;
      })
      .addCase(selectedSubreddits.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default subredditsSlice.reducer;
export const selectAllSubreddits = (state) => state.subreddit.subreddits;
export const getSelectedSubreddits = (state) =>
  state.subreddit.selectedSubreddits;
export const getStatus = (state) => state.subreddit.status;
export const getError = (state) => state.subreddit.error;
