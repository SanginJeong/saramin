import React from 'react'

const ErrorBoundary = ({error}) => {
  return (
    <div>{error.message}</div>
  )
}

export default ErrorBoundary