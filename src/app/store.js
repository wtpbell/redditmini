import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "../features/subreddit/subredditSlice";
import filterReducer from "../features/filter/filterSlice";
import postsReducer from "../features/posts/postsSlice";
import searchReducer from "../features/search/searchSlice";
import commentsReducer from "../features/comments/commentSlice"

export default configureStore({
    reducer: {
        subreddit: subredditReducer,
        filter: filterReducer,
        posts: postsReducer,
        search: searchReducer,
        comments: commentsReducer
    },
})