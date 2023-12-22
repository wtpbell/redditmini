import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import formatTimeStamp from "../../utilities/formatTimeStamp";
import formatImage from "../../utilities/formatImage";
import abbrNum from "../../utilities/abbrNum";

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
    console.log(result.data.children);
    return result.data.children;
  }
);

export const subredditInfo = createAsyncThunk(
  "subreddits/subredditInfo",
  async (subreddit) => {
    const response = await fetch(`https://api.reddit.com/r/${subreddit}/about`);
    const result = await response.json();
    // console.log(result.data);
    return result.data;
  }
);

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    selectedSubreddits: [],
    subredditInfo: {},
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
            icon_img,
            community_icon,
            id,
            display_name,
          } = subreddit.data;
          return {
            iconImg: icon_img,
            communityIcon: formatImage(community_icon),
            userId: id,
            subreddit: display_name,
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
            ups,
            subreddit_name_prefixed,
            num_comments,
            created_utc,
            id,
            selftext,
            title,
            subreddit_id,
            subreddit,
            url,
            media,
            icon_img,
          } = target.data;
          return {
            author: author,
            iconImg: icon_img,
            ups: abbrNum(ups, 1),
            subredditName: subreddit_name_prefixed,
            numOfComments: abbrNum(num_comments,1),
            time: formatTimeStamp(created_utc),
            id: id,
            text: selftext ? selftext : null,
            title: title,
            subredditId: subreddit_id,
            subreddit: subreddit,
            image:
              url.includes(".jpg") ||
              url.includes(".png") ||
              url.includes(".jpeg")
                ? url
                : null,
            video: media? media?.reddit_video : null,
          };
        });
        state.selectedSubreddits = selectedSubreddit;
      })

      .addCase(selectedSubreddits.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(subredditInfo.pending, (state) => {
        state.status = "pending";
      })

      .addCase(subredditInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.subredditInfo= action.payload
        
      })

      .addCase(subredditInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default subredditsSlice.reducer;
export const selectAllSubreddits = (state) => state.subreddit.subreddits;
export const getSelectedSubreddits = (state) => state.subreddit.selectedSubreddits;
export const getSubredditInfo = (state) => state.subreddit.subredditInfo;
export const getStatus = (state) => state.subreddit.status;
export const getError = (state) => state.subreddit.error;
