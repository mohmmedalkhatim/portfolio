import { useEffect } from 'react';
import { usePosts } from '../../../context/posts';


function Post() {
  let {active:post,fetchPost} = usePosts()

  if(post){
    return (
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>,
      </main>
    )
  }
}

export default Post
