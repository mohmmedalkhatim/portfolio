import { usePosts } from "../../context/posts"




function Posts() {
  let list = usePosts((post) => post.list)
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