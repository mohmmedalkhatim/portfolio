import { usePosts } from '../../../context/posts';
import {TbChevronLeft} from 'react-icons/tb';

function Post() {
  let { active: post,back } = usePosts()

  if (post) {
    return (
      <main>
        <div onClick={back}><TbChevronLeft/></div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    )
  }
}

export default Post
