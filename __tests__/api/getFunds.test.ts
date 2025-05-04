import { jest, describe, it } from '@jest/globals'
import { Fund } from '@/types/Fund'
import { getFunds } from '../../api/getFunds'

jest.mocked(fetch)

const testFunds: Fund[] = [{id: 0, name: 'test fund', description: 'test description'}]

describe('getFunds', () => {
  it('should get funds, given in correct shape', async () => {
    // Given
    jest.spyOn(global, 'fetch').mockResolvedValue(new Response(JSON.stringify(testFunds)))

    // When
    const response = await getFunds()

    // Then
    expect(response).toEqual(testFunds)
  })

  it.each([
    testFunds[0], // not an array
    [{ id: 1 }, { name: '2' }] // an array but not of type Fund[]
  ])('should error, given %o', async (returnedValue) => {
    // Given
    jest.spyOn(console, 'error').mockImplementationOnce(() => {})
    jest.spyOn(global, 'fetch').mockResolvedValue(new Response(JSON.stringify(returnedValue)))

    // When
    const response = await getFunds()

    // Then
    expect(response).toBeNull()
    expect(console.error).toHaveBeenCalledWith('Returned response not of correct type')
  })

  it('should error, given server error', async () => {
    // Given
    const error = new Error('test')
    jest.spyOn(console, 'error').mockImplementationOnce(() => {})
    jest.spyOn(global, 'fetch').mockRejectedValue(error)

    // When
    const response = await getFunds()

    // Then
    expect(response).toBeNull()
    expect(console.error).toHaveBeenCalledWith('There was an error getting the list of funds', error)
  })
})