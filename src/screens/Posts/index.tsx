import { useEffect } from 'react';
import { usePosts } from '../../context/posts';
import Error from '../../components/error';
import List from './list';
import Loading from '../../components/loading';
import Post from './post';

function Posts() {
  const { list, fetchPost, isloading, error, active } = usePosts();
  useEffect(() => {
    fetchPost();
  }, [list]);
  const content = isloading ? (
    <Loading />
  ) : error.isError ? (
    <Error />
  ) : active ? (
    <Post />
  ) : (
    <List list={list} />
  );
  return <main className="ml-10 mt-12">{content}</main>;
}
export default Posts;
