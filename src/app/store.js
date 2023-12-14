import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "../features/subreddit/subredditSlice";
import filterReducer from "../features/filter/filterSlice";

export default configureStore({
    reducer: {
        subreddit: subredditReducer,
        filter: filterReducer,
    },
})