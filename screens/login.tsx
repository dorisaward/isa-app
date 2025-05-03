import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedButton } from '@/components/ThemedButton'
import { useNavigation } from 'expo-router'
import { useCallback } from 'react'
import { RootStackParamList } from '@/types/RootStackParamList'
import { NavigationProp, StackActions } from '@react-navigation/core'


export const Login = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleNavigation = useCallback(() => {
    // Login steps go here
    navigation.dispatch(
      StackActions.replace('Home')
    )
  }, [navigation])
  return (
    <ThemedView>
      <ThemedText>Login</ThemedText>
      <ThemedButton title={'Submit'} onPress={handleNavigation}/>
    </ThemedView>
  )
}