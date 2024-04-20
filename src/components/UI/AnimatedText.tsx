import React, { useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedTextProps {
  children: React.ReactNode
  direction: string
}

function AnimatedText ({ children, direction }: AnimatedTextProps): JSX.Element {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  let transformValue = 'none'

  switch (direction) {
    case 'u':
      transformValue = isInView ? 'none' : 'translateY(50px)'
      break
    case 'r':
      transformValue = isInView ? 'none' : 'translateX(50px)'
      break
    case 'd':
      transformValue = isInView ? 'none' : 'translateY(-50px)'
      break
    case 'l':
      transformValue = isInView ? 'none' : 'translateX(-50px)'
      break
    default:
      transformValue = 'none'
      break
  }

  return (
    <span
      ref={ref}
      style={{
        transform: transformValue,
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }}
    >
      {children}
    </span>
  )
}

export default AnimatedText
