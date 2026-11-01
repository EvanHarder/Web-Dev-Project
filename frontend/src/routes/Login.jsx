import { useState } from 'react'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const success = onLogin(email, password)
    if (!success) {
      setError('Incorrect email or password.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-4">
      <h2 className="text-2xl font-bold">Log in</h2>
      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-3 text-sm border border-gray-200 rounded-lg bg-gray-50"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-3 text-sm border border-gray-200 rounded-lg bg-gray-50"
        />
      </div>

      <button type="submit" className="w-full rounded-lg bg-(--accent) p-3 font-medium text-white">
        Log in
      </button>
    </form>
  )
}

export default Login