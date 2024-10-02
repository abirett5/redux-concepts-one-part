// Modules
import React from 'react'
import { useSelector } from 'react-redux'

// Users Slice
import { selectAllUsers } from '../users/UsersSlice'

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find((user) => user.id === userId)

    return <span>By { author ? author.name : 'Unknown Author' }</span>
}

export default PostAuthor