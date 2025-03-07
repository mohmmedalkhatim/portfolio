import { Post, usePosts } from "../../../context/posts"

function List({ list }: { list: Post[] }) {
    let { setActive } = usePosts()
    return (
        <ul className="pl-[5rem] pt-[3rem] flex flex-col gap-8">
            {list.map((item, i) =>
                <li key={i} className="underline cursor-pointer">
                    <h4 onClick={() => setActive(item.id)}>{item.title}</h4 >
                </li>
            )}
        </ul>
    )
}
export default List