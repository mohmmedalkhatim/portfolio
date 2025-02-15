import { useEffect, useState } from "react"
import { db } from "../../main"
import { collection, doc, getDocs } from "firebase/firestore"

function Posts() {
  let [list,setlist] = useState()
  useEffect(()=>{
    let use = collection(db,"posts");
    (async ()=>{ 
      let docs = await getDocs(use);
    })()
  },[])
  return (
    <main>
      <ul>
        {}
      </ul>
        
    </main>
  )
}
export default Posts