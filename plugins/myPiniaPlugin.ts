// plugins/myPiniaPlugin.ts
import { PiniaPluginContext } from 'pinia'

function MyPiniaPlugin({ store }: PiniaPluginContext) {
  store.$subscribe((mutation) => {
    // react to store changes
    console.log(`[🍍 ${mutation.storeId}]: ${mutation.type}.`)
  })

  // Note this has to be typed if you are using TS
  return { creationTime: new Date() }
}

export default defineNuxtPlugin(({ $pinia }) => {
  if (!$pinia) {
    console.error('Pinia instance not found')
    return
  }
  
  $pinia.use(MyPiniaPlugin)
})

declare module 'pinia' {
  export interface PiniaCustomProperties {
    creationTime: Date
  }
}