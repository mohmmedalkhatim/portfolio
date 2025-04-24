import { TbBooks, TbChessKing, TbCode, TbHeartbeat, TbMovie,  TbNetwork,  TbQuote, TbSearch, TbSocial, } from "react-icons/tb"

function Interest() {
  return (
    <main className="">
        <ul className="h-[30rem] flex gap-10 p-16">
            <li><TbCode strokeWidth={"1.5px"} size={"3.5rem"}/></li>
            <li><TbQuote strokeWidth={"1.5px"} size={"3.5rem"}/></li>
            <li><TbBooks strokeWidth={"1.5px"} size={"3.8rem"}/></li>
            <li><TbMovie strokeWidth={"1.5px"} size={"3.8rem"}/></li>
            <li><TbChessKing strokeWidth={"1.5px"} size={"3.8rem"}/></li>
            <li><TbHeartbeat strokeWidth={"1.5px"} size={"3.8rem"}/></li>
            <li><TbNetwork strokeWidth={"1.5px"} size={"3.8rem"}/></li>
            <li><TbSocial strokeWidth={"1.5px"} size={"3.8rem"}/></li>
        </ul>
    </main>
  )
}
export default Interest