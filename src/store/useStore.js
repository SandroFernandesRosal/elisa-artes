import { create } from 'zustand'

export const useSize = create((set) => ({
  size: 'normal',
  setSize: (state) => set({ size: state }),
}))

export const useDisplay = create((set) => ({
  display: 'destaque',
  setDisplay: (state) => set({ display: state }),
}))
