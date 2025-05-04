import { ThemedView } from '@/components/ThemedView'
import { useNavigation } from 'expo-router'
import { NavigationProp, StackActions } from '@react-navigation/core'
import { RootStackParamList } from '@/types/RootStackParamList'
import { ThemedButton } from '@/components/ThemedButton'
import { useCallback } from 'react'
import { ThemedText } from '@/components/ThemedText'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export const Index = ({ route: { params } }: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const handleLogout = useCallback(() => {
    // Logout steps go here
    navigation.dispatch(
      StackActions.replace('Login')
    )
  }, [navigation])
  const navigateToFundsList = useCallback(() => {
    navigation.navigate('FundsList')
  }, [navigation])

  return (
    <ThemedView>
      {params?.selectedFund && <ThemedText>Selected fund: {params.selectedFund.name}</ThemedText>}
      <ThemedButton title={'View types of funds'} onPress={navigateToFundsList}/>
      <ThemedButton title={'Log out'} onPress={handleLogout}/>
    </ThemedView>
  )
}
