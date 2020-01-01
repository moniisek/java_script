import React, { useState, useEffect } from 'react'

export default function useWindowSize(cb) {
  const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight])


  useEffect(() => {
    const handleResize = () => {
      cb()
      setWindowSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)

  }, [])
  /* effect handleResize will only run on first mount
  // on first mount it will set up an event listener and the handleResize will run whenever
  user resizes their window
  evrytime it runs, we get a new timer with clearTimeout

  */

  return [windowWidth, windowHeight]

}
