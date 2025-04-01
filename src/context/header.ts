import { create } from 'zustand';

interface counter {
  value: number;
  update: (n: number) => void;
}

export const useheader = create<counter>((set) => ({
  value: 0,
  update(n) {
    set({ value: n });
  },
}));
