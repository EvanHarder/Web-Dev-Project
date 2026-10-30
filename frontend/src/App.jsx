import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        <Outlet />
      </main>
    </div>
  )
}

export default App;
