import { useState } from 'react'
import usersData from '../data/users.json'
import Login from './Login'
import Signup from './Signup'
import UserDetails from '../components/UserDetails'
import SavedCars from '../components/SavedCars'

function Profile() {
  const [users, setUsers] = useState(usersData)

  //user currently logged in
  const [currentUser, setCurrentUser] = useState(null)

  //which form to show when logged out
  const [showSignup, setShowSignup] = useState(false)

  //checks if user exists 
  const handleLogin = (email, password) => {
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (user) {
      setCurrentUser(user)
      return true
    }
    return false
  }

  //creates a new account unless email is in use
  const handleSignup = ({ name, email, password }) => {
    const taken = users.some((u) => u.email.toLowerCase() === email.toLowerCase())
    if (taken) {
      return { ok: false, error: 'An account with that email already exists.' }
    }

    const newUser = { id: Date.now(), name, email, password, savedCars: [] }
    setUsers([...users, newUser]) 
    //logs in
    setCurrentUser(newUser)       
    return { ok: true }
  }

  //replaces user in both currentUser and users list without mutating
  const updateUser = (updatedUser) => {
    setCurrentUser(updatedUser)
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)))
  }

  const handleSaveName = (name) => updateUser({ ...currentUser, name })

  const handleRemoveCar = (carId) =>
    updateUser({
      ...currentUser,
      savedCars: currentUser.savedCars.filter((car) => car.id !== carId),
    })

  const handleLogout = () => {
    setCurrentUser(null)
    setShowSignup(false)
  }

  //if not logged in show signup or login
  if (!currentUser) {
    return showSignup ? (
      <Signup onSignup={handleSignup} onSwitch={() => setShowSignup(false)} />
    ) : (
      <Login onLogin={handleLogin} onSwitch={() => setShowSignup(true)} />
    )
  }

  //show profile after logging in
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">User profile</h1>
        <button onClick={handleLogout} className="rounded-lg border border-gray-200 px-4 py-2 text-sm">
          Sign out
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-start">
        <UserDetails user={currentUser} onSave={handleSaveName} />
        <SavedCars cars={currentUser.savedCars} onRemove={handleRemoveCar} />
      </div>
    </div>
  )
}

export default Profile