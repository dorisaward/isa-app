import { describe, it } from '@jest/globals'
import { FundsList } from '@/components/FundsList'
import { Fund } from '@/types/Fund'
import { fireEvent, render } from '@testing-library/react-native'

jest.mock('react', () => {
  const React = jest.requireActual('react');
  React.use = (props: any) => props;
  return React;
})

const mockPopTo = jest.fn()

jest.mock('expo-router', () => ({
  useNavigation: () => ({
    popTo: mockPopTo,
  })
}))

const testFunds: Fund[] = [{ id: 0, name: 'test fund', description: 'test description' }]

describe('FundsList', () => {
  it('should render list of funds, given test funds', () => {
    // Given
    const renderable = (
      <FundsList fundsPromise={testFunds as any}/>
    )

    // When
    const { getByText } = render(renderable)

    // Then
    expect(getByText(testFunds[0].description)).toBeTruthy()
    expect(getByText('Select ' + testFunds[0].name)).toBeTruthy()
  })
  it('should navigate, given fund selected', () => {
    // Given
    const renderable = (
      <FundsList fundsPromise={testFunds as any}/>
    )
    const { getByText } = render(renderable)
    const selectButton = getByText('Select ' + testFunds[0].name)

    // When
    fireEvent.press(selectButton)

    // Then
    expect(mockPopTo).toHaveBeenCalledWith('Home', { selectedFund: testFunds[0] })
  })
  it('should render error message, given null', () => {
    // Given
    const renderable = (
      <FundsList fundsPromise={null as any}/>
    )

    // When
    const { getByText } = render(renderable)

    // Then
    expect(getByText('We are having technical difficulties, please try again later.')).toBeTruthy()
  })
})