import React, { useEffect, createRef } from 'react'
import { ThbContainer } from '../components/styled/thumb'
import { Loader } from '../components/Loader'
export const InfiniteLoader = ({ children, noMoreData, onLoadMore, loading }) => {
  const loaderRef = createRef()
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          if (typeof onLoadMore === 'function' && !noMoreData && !loading) onLoadMore()
        }
      },
      {
        rootMargin: '100px',
      }
    )
    observer.observe(loaderRef.current)
    return () => {
      observer.disconnect()
    }
  })
  return (
    <ThbContainer>
      {children}
      <div
        ref={loaderRef}
        style={{ order: 9999999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Loader loading={loading} />
      </div>
    </ThbContainer>
  )
}
