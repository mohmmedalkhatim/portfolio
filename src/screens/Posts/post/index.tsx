import { useEffect, useState } from 'react'

type headline = {
  head: string
  body: string
}
type PostType = { title: string; content: headline[]; intro: string }

function Post () {
  let [post, setPost] = useState<PostType>()
  useEffect(() => {

  }, [])
  if (post) {
    return (
      <main>
        <h1>{post.title}</h1>
        <p>{post.intro}</p>,
        {post.content.map(item => (
          <div>
            <h2>{item.head}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </main>
    )
  }
}

export default Post
