import { usePosts } from '../../../context/posts';
import { useParams } from 'react-router-dom';


function Post() {
  let { id } = useParams()
  let { active: post } = usePosts()

  if (post) {
    return (
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>,
      </main>
    )
  }
}

export default Post
