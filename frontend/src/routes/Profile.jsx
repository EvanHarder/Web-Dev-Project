import { useState } from 'react'
import users from '../data/users.json'
import Login from './Login'

function Profile() {
  //user currently logged in
  const [currentUser, setCurrentUser] = useState(null)

  //checks if user exists
  const handleLogin = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password)
    if (user) {
      setCurrentUser(user)
      return true
    }
    return false
  }

  //if user not found, set to null
  const handleLogout = () => setCurrentUser(null)

  //if not logged in, go to log in page
  if (!currentUser) {
    return <Login onLogin={handleLogin} />
  }

  //show profile after logging in
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome, {currentUser.name}</h1>
      <p>Email: {currentUser.email}</p>
      <button onClick={handleLogout} className="rounded-lg border border-gray-200 px-4 py-2">
        Log out
      </button>
    </div>
  )
}

export default Profile