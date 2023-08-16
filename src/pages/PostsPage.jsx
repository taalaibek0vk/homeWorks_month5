import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const PostsPage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
        axios.get('https://dummyjson.com/posts')
        .then(response => {
            const data = response.data;
            setPosts(data.posts);
        })
    }, []);


  return (
    <div>
      <h3>Посты</h3>
        {posts.map((post) => (
            <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <p>{post.tags}</p>
            </div>
        ))}
        </div>
  )
}

export default PostsPage