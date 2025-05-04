import { Fund } from '@/types/Fund'
import { use } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'
import { ThemedText } from '@/components/ThemedText'

type FundsListProps = {
  fundsPromise: Promise<Fund[] | null>
}

export const FundsList = ({ fundsPromise }: FundsListProps) => {
  const funds = use(fundsPromise)
  const renderItem = ({ item }: ListRenderItemInfo<Fund>) => (
    <ThemedText key={item.id}>{item.name}: {item.description}</ThemedText>
  )
  return funds ? (
    <FlatList contentContainerStyle={{ flex: 1, justifyContent: 'center' }} data={funds} renderItem={renderItem}/>
  ) : (
    <ThemedText>We are having technical difficulties, please try again later.</ThemedText>
  )
}
