// Modules
import React from 'react'
import { useDispatch } from 'react-redux'

// Reducers
import { reactionAdded } from './PostsSlice'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButton = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={ name } 
                type='button' 
                className='reactionButton' 
                onClick={ () => dispatch(reactionAdded({ postId: post.id, reaction: name })) }
            >{ emoji } { post.reactions[name] }</button>
        )
    })

    return (
        <div>
            { reactionButtons }
        </div>
    )
}

export default ReactionButton