import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { useNavigation } from 'expo-router'
import { NavigationProp, StackActions } from '@react-navigation/core'
import { RootStackParamList } from '@/types/RootStackParamList'
import { ThemedButton } from '@/components/ThemedButton'
import { useCallback } from 'react'

export const Index = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleLogout = useCallback(() => {
    // Logout steps go here
    navigation.dispatch(
      StackActions.replace('Login')
    )
  }, [navigation])
  return (
    <ThemedView>
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
      <ThemedButton title={'Log out'} onPress={handleLogout}/>
    </ThemedView>
  );
}
