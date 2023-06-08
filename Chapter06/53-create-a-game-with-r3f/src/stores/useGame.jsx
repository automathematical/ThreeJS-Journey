import create from 'zustand'

export default create((set) => {
  return {
    blocksCount: 3,

    /**
     * Phases
     */
    phase: 'ready',
    start: () => {
      set(() => {
        return { phase: 'playing' }
      })
    },
  }
})
