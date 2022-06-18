import {useState, useEffect, useCallback} from 'react'

export const useInfiniteScrollDown = ({
  ref, hasMore, onLoadMore, adjustScroll
}) => {
  const [isFetching, setIsFetching] = useState(false)
  const [previousScroll, setPreviousScroll] = useState()
  const [buttonUp, setButtonUp] = useState(false)

  const handleScroll = useCallback(() => {
    const element = ref.current

    if (element.scrollTop > 150) {
      setButtonUp(true)
    } else {
      setButtonUp(false)
    }

    const isBottomReached = element.scrollHeight - element.scrollTop === element.clientHeight

    if (isBottomReached && isFetching === false && hasMore) {
      setPreviousScroll({
        top: element.scrollTop,
        height: element.scrollTop + 100
      })
      setIsFetching(true)
    }
  }, [ref, isFetching, hasMore, previousScroll])

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    element.addEventListener('scroll', handleScroll)

    return () => {
      element.removeEventListener('scroll', handleScroll)
    }
  }, [ref, handleScroll])

  // loads more if fetching has started
  useEffect(() => {
    if (isFetching) {
      onLoadMore(stopFetching)
    }
  }, [isFetching, onLoadMore])

  const stopFetching = useCallback(() => {
    setIsFetching(false)
    adjustScroll(false, previousScroll)
  }, [previousScroll])

  return [isFetching, stopFetching, buttonUp]
}

export default useInfiniteScrollDown
