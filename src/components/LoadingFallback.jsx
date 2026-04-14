import React from 'react'

const LoadingFallback = () => {
  return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-2xl font-semibold text-gray-700 animate-pulse">
                Loading...
            </h1>
        </div>
  )
}

export default LoadingFallback
