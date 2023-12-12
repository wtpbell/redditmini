import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "../features/subreddit/subredditSlice";

export default configureStore({
    reducer: {
        subreddit: subredditReducer,
    },
})