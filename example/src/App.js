import React from 'react'
import { useCatFact } from '@aishchat13/use-cat-fact'

const App = () => {
  const {fact, loading} = useCatFact()
  if(loading) return <p>Loading....</p>
  if(fact) return (
    <div>
      {fact}
    </div>
  )
  return null
}
export default App