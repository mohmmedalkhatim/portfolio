import { usePosts } from '../../../context/posts';
import { TbChevronLeft } from 'react-icons/tb';

function Post() {
  let { active: post, back } = usePosts()

  if (post) {
    return (
      <div className='flex flex-col gap-12'>
        <div className='postheader'>
          <div className='p-4' onClick={back}><TbChevronLeft /></div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1>{post.title}</h1>
          <p className='space'>{post.body}</p>
        </div>
      </div>
    )
  }
}

export default Post
