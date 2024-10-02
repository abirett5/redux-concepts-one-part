// Modules
import React from 'react'
import { useSelector } from 'react-redux'

// Components
import { selectAllPosts } from './PostsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButton from './ReactionButton'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={ post.id }>
            <em style={{ fontSize: '0.7em' }}><TimeAgo timeStamp={ post.date }/></em>
            <h3 style={{ marginTop: '10px' }}>{ post.title }</h3>
            <p>{ post.content.substring(0, 100) }</p>

            <em className="postCredit">
                <PostAuthor userId={ post.userId }/>
            </em>

            <ReactionButton post={ post }/>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            { posts == '' ? <p style={{ marginTop: '20px' }}>No Posts Here</p> : renderedPosts }
        </section>
    )
}

export default PostsList