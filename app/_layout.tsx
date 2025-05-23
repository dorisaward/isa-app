import { SafeAreaView } from 'react-native'
import { Login } from '@/screens/login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Index } from '@/screens'
import { RootStackParamList } from '@/types/RootStackParamList'
import { theme } from '@/theme/theme'
import { createServer } from "miragejs"
import { serverConfig } from '@/mockBackend/serverConfig'
import { Funds } from '@/screens/funds'

declare const window: {
  server: ReturnType<typeof createServer>
} & Window

const Stack = createNativeStackNavigator<RootStackParamList>()

// eslint-disable-next-line
export default function RootLayout() {

  if (window.server) {
    console.error('window.server is already defined')
    window.server.shutdown()
  }

  window.server = createServer(serverConfig)

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
        <Stack.Screen name="FundsList" component={Funds} options={{ title: 'List of available funds' }}/>
      </Stack.Navigator>
    </SafeAreaView>
  )
}
