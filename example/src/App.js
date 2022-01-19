import React from 'react'
import { useMyHook } from '@aishchat13/use-cat-fact'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App