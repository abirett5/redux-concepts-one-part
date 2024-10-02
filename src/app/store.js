// Node Modules
import { configureStore } from '@reduxjs/toolkit'

// Reducers
import PostsReducer from '../features/posts/PostsSlice'
import UsersReducer from '../features/users/UsersSlice'

export const store = configureStore({
    reducer: {
        posts: PostsReducer,
        users: UsersReducer
    }
})