import { Fund } from '@/types/Fund'
import { Fragment, use, useCallback } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { ThemedButton } from '@/components/ThemedButton'
import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes'

type FundsListProps = {
  fundsPromise: Promise<Fund[] | null>
}

export const FundsList = ({ fundsPromise }: FundsListProps) => {
  const funds = use(fundsPromise)

  const handleSelectFund = useCallback((fundId: number) => (_: GestureResponderEvent) => {
    // Post request here
    console.log(fundId)
  }, [])
  const renderItem = ({ item }: ListRenderItemInfo<Fund>) => (
    <Fragment key={item.id}>
      <ThemedText>{item.description}</ThemedText>
      <ThemedButton title={'Select ' + item.name} onPress={handleSelectFund(item.id)} />
    </Fragment>
  )
  return funds ? (
    <FlatList contentContainerStyle={{ flex: 1, justifyContent: 'space-around' }} data={funds} renderItem={renderItem}/>
  ) : (
    <ThemedText>We are having technical difficulties, please try again later.</ThemedText>
  )
}
