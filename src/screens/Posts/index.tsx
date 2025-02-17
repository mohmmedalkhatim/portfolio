import { useEffect } from "react"
import { usePosts } from "../../context/posts"




function Posts() {
  let { list, fetchPost } = usePosts()
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <main>
      <ul className="pl-[5rem] pt-[3rem]">
        {list.map(item =>
          <li>
            <h3 className="text-lg" >{item.title}</h3 >
          </li>
        )}
      </ul>
    </main>
  )
}
export default Posts