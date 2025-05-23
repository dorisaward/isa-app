import { Fund } from '@/types/Fund'

export const serverConfig = {
  routes() {
    this.get("/api/isa_funds", (): Fund[] => {
      return [
        { id: 1, name: "High risk", description: 'High risk, high reward' },
        { id: 2, name: "Mid risk", description: 'Mid risk, mid reward' },
        { id: 3, name: "Low risk", description: 'Low risk, low reward' },
      ]
      // throw new Error('test error handling')
    })
  },
}
