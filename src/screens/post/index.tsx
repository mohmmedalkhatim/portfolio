import { useParams } from "react-router-dom"

function post() {
  let { id } = useParams()
  return (
    <div>post id : {id}</div>
  )
}
export default post