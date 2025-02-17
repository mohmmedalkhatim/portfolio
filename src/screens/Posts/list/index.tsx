import { Post } from "../../../context/posts"

function List({list}:{list:Post[]}) {
    return (
        <ul className="pl-[5rem] pt-[3rem]">
            {list.map(item =>
                <li>
                    <h3 className="text-lg" >{item.title}</h3 >
                </li>
            )}
        </ul>
    )
}
export default List