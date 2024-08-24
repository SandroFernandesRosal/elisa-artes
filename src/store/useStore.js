import { create } from 'zustand'

export const useSize = create((set) => ({
  size: 'normal',
  setSize: (state) => set({ size: state }),
}))

export const useCategory = create((set) => ({
  category: 'todos',
  setCategory: (state) => set({ category: state }),
}))
