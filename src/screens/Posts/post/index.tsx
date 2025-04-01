import { usePosts } from '../../../context/posts';
import { TbChevronLeft } from 'react-icons/tb';

function Post() {
  let post = usePosts((state) => state.active);

  if (post) {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col gap-8 pl-16">
          <h3 className="text-center">{post.title}</h3>
          <p className="">
            <span className="w-12 inline-block" />
            {post.body}
          </p>
        </div>
      </div>
    );
  }
}

export default Post;
