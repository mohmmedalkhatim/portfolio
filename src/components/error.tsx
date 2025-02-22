import { usePosts } from "../context/posts"

function Error() {
  let Err = usePosts(state => state.error.reason)
  return (
    <main>
        <h1 className="text-2xl">Error</h1>
        <p>{Err}</p>
    </main>
  )
}
export default Error