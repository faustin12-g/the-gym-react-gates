import { lazy, Suspense, useState } from "react"
import LoadingFallback from "./components/LoadingFallback"

const Dashboard = lazy(()=>import('./components/Dashboard'))
const Profile = lazy(()=>import('./components/Profile'))
const Settings = lazy(()=>import('./components/Settings'))
const Lazy = () => {
    const [currentPage, setCurrentPage] = useState('dashboard')
  return (
    <div className="p-4">
        <div className="grid grid-cols-4 gap-2">
        <button onClick={()=>setCurrentPage('dashboard')}>Dashboard</button>
        <button onClick={()=>setCurrentPage('profile')}>Profile</button>
        <button onClick={()=>setCurrentPage('settings')}>Settings</button>
        </div>

        <Suspense fallback={<LoadingFallback />}>
            {currentPage==='dashboard' && <Dashboard/>}
            {currentPage==='profile' && <Profile />}
            {currentPage==='settings' && <Settings />}
        </Suspense>
      
    </div>
  )
}

export default Lazy
