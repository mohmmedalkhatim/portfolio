import { Post, usePosts } from "../../../context/posts"

function List({ list }: { list: Post[] }) {
    let { setActive } = usePosts()
    return (
        <ul className="pl-[5rem] pt-[3rem] flex flex-col gap-8">
            {list.map((item, i) =>
                <li key={i} className="underline cursor-pointer">
                    <h5 onClick={() => setActive(item.id)}>{item.title}</h5 >
                </li>
            )}
        </ul>
    )
}
export default List