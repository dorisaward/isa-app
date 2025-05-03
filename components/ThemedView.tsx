import { View, ViewProps } from 'react-native'
import { theme } from '@/theme/theme'

export const ThemedView = ({ children, style, ...props }: ViewProps) => {
  const styles: ViewProps['style'] = [{ flex: 1, backgroundColor: theme.lightBackground, alignItems: 'center', justifyContent: 'center' }, style]
  return <View style={styles} {...props}>{children}</View>
}