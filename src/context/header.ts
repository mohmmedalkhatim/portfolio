import { create } from "zustand";

interface counter{
    value:number;
    update:(n:number)=>void
}

export let useheader = create<counter>((set)=>({
    value:0,
    update(n) {
        set(({value:n}))
    },
}))