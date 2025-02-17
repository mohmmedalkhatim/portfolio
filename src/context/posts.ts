import { collection, getDocs } from 'firebase/firestore'
import { create } from 'zustand'
import { db } from '../main'

class Post {
  id: number
  title: string = ''
  body: string = ''
  constructor (id: number, title: string, body: string) {
    this.title = title
    this.body = body
    this.id = id
  }
}

interface poststore {
  list: Post[]
  active: Post | undefined
  isloading: boolean
  error: { isError: boolean; reason: String }
  fetchPost: () => Promise<void>
  getone: (id: number) => void
}

export let usePosts = create<poststore>(set => ({
  list: [],
  active: undefined,
  isloading: true,
  error: { isError: false, reason: '' },
  fetchPost: async () => {
    getDocs(collection(db, 'posts'))
      .then(query => {
        let list: Post[] = []
        query.docs.forEach(item => {
          /* @ts-ignore */
          list.push(item.data() as Post[])
        })

        set({ list })
      })
      .catch(err => {
        set({ error: { isError: true, reason: err } })
      })
      .finally(() => {
        set({ isloading: false })
      })
  },
  getone: (id: number) => {
    set(state => {
      return {
        active: state.list.find(post => post.id == id),
        list: state.list
      }
    })
  }
}))
