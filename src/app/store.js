import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "../features/subreddit/subredditSlice";
import filterReducer from "../features/filter/filterSlice";
import postsReducer from "../features/posts/postsSlice";

export default configureStore({
    reducer: {
        subreddit: subredditReducer,
        filter: filterReducer,
        posts: postsReducer,
    },
})