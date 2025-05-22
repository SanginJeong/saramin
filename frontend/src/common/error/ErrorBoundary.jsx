import React from 'react'

const ErrorBoundary = ({errorMessage}) => {
  
  return (
    <div className='font-bold text-red-600'>{errorMessage}</div>
  )
}

export default ErrorBoundary