import { Fund } from '@/types/Fund'

const isFund = (data: unknown): data is Fund => {
  return (
    typeof (data as Fund).id === 'number' &&
    typeof (data as Fund).name === 'string' &&
    typeof (data as Fund).description === 'string'
  )
}

export const getFunds = async () => {
  try {
    const response = await fetch('/api/isa_funds')
    const fundsList = JSON.parse(await response.text())
    if (Array.isArray(fundsList) && fundsList.every(isFund)) {
      return fundsList
    } else {
      console.error('Returned response not of correct type')
      return null
    }
  } catch (e) {
    console.error('There was an error getting the list of funds', e)
    return null
  }
}
