import { useState } from 'react'

function SignupForm({ onSignup, onSwitch }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('') 

  const handleSubmit = (e) => {
    e.preventDefault() 

    //check the form before creating the account
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    const result = onSignup({ name, email, password })
    if (!result.ok) {
      setError(result.error)
    }
  }

  const inputClass =
    'block w-full p-3 text-sm border border-gray-200 rounded-lg bg-gray-50'

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-4">
      <h2 className="text-2xl font-bold">Sign up</h2>

      {/*makes screen readers announce the error */}
      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

      <div>
        <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input id="signup-name" type="text" required value={name}
          onChange={(e) => setName(e.target.value)} className={inputClass} />
      </div>

      <div>
        <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input id="signup-email" type="email" required value={email}
          onChange={(e) => setEmail(e.target.value)} className={inputClass} />
      </div>

      <div>
        <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input id="signup-password" type="password" required value={password}
          onChange={(e) => setPassword(e.target.value)} className={inputClass} />
      </div>

      <div>
        <label htmlFor="signup-confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
        <input id="signup-confirm" type="password" required value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} className={inputClass} />
      </div>

      <button type="submit" className="w-full rounded-lg bg-(--accent) p-3 font-medium text-white">
        Create account
      </button>

      <p className="text-sm text-gray-500">
        Already have an account?{' '}
        <button type="button" onClick={onSwitch} className="underline">Log in</button>
      </p>
    </form>
  )
}

export default SignupForm