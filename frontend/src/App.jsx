import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
const backgroundImage = "./image.png"

function App() {
  return (
    <div className="app bg-neutral-900 min-h-screen">
      <Navbar />
      <img id="background-image" src={backgroundImage} alt="Background" className="relative top-0 left-0 w-full h-110 object-cover" />

      <main className="mx-auto max-w-6xl px-4 space-y-6 text-white">
        <Outlet />
      </main>
      <footer className="bg-neutral-950 text-white border-t border-neutral-800 mt-8">
        <div className="mx-auto px-4 text-center h-24">
        </div>
      </footer>
    </div>
  )
}

export default App;
