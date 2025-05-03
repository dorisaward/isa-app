import { SafeAreaView } from 'react-native'
import { Login } from '@/screens/login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Index } from '@/screens'
import { RootStackParamList } from '@/types/RootStackParamList'
import { theme } from '@/theme/theme'

const Stack = createNativeStackNavigator<RootStackParamList>();

// eslint-disable-next-line
export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.pink }}>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: theme.pink,
        },
        headerTintColor: theme.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Login" component={Login} options={{ headerBackVisible: false, gestureEnabled: false }}/>
        <Stack.Screen name="Home" component={Index} options={{ headerBackVisible: false, gestureEnabled: false }}/>
      </Stack.Navigator>
    </SafeAreaView>
  );
}
