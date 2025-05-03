import { Button, ButtonProps } from 'react-native'
import { theme } from '@/theme/theme'

export const ThemedButton = ({ color, ...props }: ButtonProps) => {
  return <Button {...props} color={theme.purple}/>
}