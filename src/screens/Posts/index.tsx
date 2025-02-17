import { useEffect } from "react"
import { usePosts } from "../../context/posts"




function Posts() {
  let { list, fetchPost } = usePosts()
  useEffect(() => {
    (async () => {
      let docs = await fetchPost()
      console.log(list)
    })()
  }, [])
  return (
    <main>
      <ul>
        {list.map(item =>
          <li>
            <h3>{item.title}</h3>
          </li>
        )}
      </ul>
    </main>
  )
}
export default Posts