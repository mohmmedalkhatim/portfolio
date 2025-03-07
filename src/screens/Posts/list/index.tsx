import { Post, usePosts } from "../../../context/posts"

function List({ list }: { list: Post[] }) {
    let { setActive } = usePosts()
    return (
        <ul className="pl-[5rem] pt-[3rem]">
            {list.map((item, i) =>
                <li key={i} className="underline cursor-pointer">
                    <h3 className="text-lg" onClick={() => setActive(item.id)}>{item.title}</h3 >
                </li>
            )}
        </ul>
    )
}
export default List