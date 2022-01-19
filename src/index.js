import {useState, useEffect} from 'react'

export const useCatFact = () => {
  const [fact, setFact] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(() => {
      async function getQuote() {
          setLoading(true)
          const response = await fetch("https://cat-fact.herokuapp.com/facts")
          const data = await response.json()
          const quote = data[0].text
          console.log("quote", quote)
          setLoading(false)
          setFact(quote)
      }
      getQuote()
  }, [])
  return {fact, loading}
}
