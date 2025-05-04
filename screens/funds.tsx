import { ThemedView } from '@/components/ThemedView'
import { Suspense } from 'react'
import { ThemedText } from '@/components/ThemedText'
import { FundsList } from '@/components/FundsList'
import { getFunds } from '@/api/getFunds'

export const Funds = () => {
  return (
    <ThemedView>
      <Suspense fallback={<ThemedText>Loading...</ThemedText>} name={'Funds'}>
        <FundsList fundsPromise={getFunds()}/>
      </Suspense>
    </ThemedView>
  )
}