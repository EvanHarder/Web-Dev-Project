import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app bg-neutral-900 min-h-screen">
      <Navbar />
        
      <Outlet />
      <footer className="bg-neutral-950 text-white border-t border-neutral-800 mt-8">
        <div className="mx-auto px-4 text-center h-24">
        </div>
      </footer>
    </div>
  )
}

export default App;
