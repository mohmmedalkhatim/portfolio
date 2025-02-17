import { useEffect } from "react"
import { usePosts } from "../../context/posts"
import Error from "../../components/error"
import List from "./list"
import Loading from "../../components/loading"




function Posts() {
  let { list, fetchPost, isloading, error } = usePosts()
  useEffect(() => {
    fetchPost()
  }, [list])
  let content = isloading ? <Loading /> : error.isError ? <Error /> : <List list={list} />
  return (
    <main>
      {content}
    </main>
  )
}
export default Posts