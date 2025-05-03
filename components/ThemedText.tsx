import { Text, TextProps } from 'react-native'
import { theme } from '@/theme/theme'

export const ThemedText = ({ children, style, ...props}: TextProps) => {
  const styles = [{ color: theme.black }, style]
  return <Text style={styles} {...props}>{children}</Text>
}