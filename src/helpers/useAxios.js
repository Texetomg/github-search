import {useState, useMemo, useCallback, useEffect} from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import _ from 'lodash'

export const useGetAxiosFetch = (config = {}) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const source = useMemo(() => axios.CancelToken.source(), [])

  const sendRequest = useCallback(async (url, _config = {}) => {
    if (!url) {
      return null
    }
    try {
      setLoading(true)

      const sendRequest = (url) => axios
        .get(url, {cancelToken: source.token, ...config, ..._config})
        .catch((err) => {
          if (axios.isCancel(err)) {
            toast.error(`request cancelled: ${err.message}`)
            setLoading(false)
          }
          else {
            toast.error('another error happened')
            setLoading(false)
          }
        })

      const promise = _.isArray(url) ? Promise.all(url.map(u => sendRequest(u))) : sendRequest(url)
      const a = await promise

      if (!a) {
        return null
      }

      setData(a)
      setLoading(false)
      return a
    }
    catch (e) {
      setData(null)
      setError(e)
      setLoading(false)
    }
  }, [setData, setLoading])

  useEffect(() => {
    return () => source.cancel('Unmounted')
  }, [])

  return [{data, loading, error}, sendRequest]
}
