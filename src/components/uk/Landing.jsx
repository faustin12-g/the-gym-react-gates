import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            React Gates
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Master React concepts by solving real-world problems
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Learn, practice, and become proficient with React through hands-on challenges and interactive lessons.
          </p>
        </div>

        {/* Featured Problems Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Problem Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Problem Card 1 */}
            <Link to='/products-filter' className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                <button>Product Filtering</button>
              </h3>
            </Link>
            <Link to='/user-profile/1' className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                <button>User profile domo</button>
              </h3>
            </Link>
            <Link to='/touch-typing-app' className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                <button>Touch Typing App</button>
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
