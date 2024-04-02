import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endpoint) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = endpoint
        const response = await axios.get(url)
        setData(response.data)
        console.log(response.data)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [endpoint])
  return { data, loading, error }
}

export default useFetch
