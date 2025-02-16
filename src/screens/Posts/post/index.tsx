import { usePosts } from '../../../context/posts';

type headline = {
  head: string
  body: string
}
type PostType = { title: string; content: headline[]; intro: string }

function Post() {
  let {active:post} = usePosts()
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
