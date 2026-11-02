import { useState } from 'react'

function UserDetails({ user, onSave }) {
  const [isEditing, setIsEditing] = useState(false) 
  const [name, setName] = useState(user.name)       
  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (trimmed === '') return 
    onSave(trimmed)
    setIsEditing(false)
  }

  const handleCancel = () => {
    //throw away unsaved changes
    setName(user.name) 
    setIsEditing(false)
  }

  const inputClass = (editable) =>
    `block w-full p-2.5 text-sm border border-gray-200 rounded-lg ${
      editable ? 'bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none' : 'bg-gray-100'
    }`

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
      <div className="p-4 border-b border-gray-200 font-bold">{user.name}</div>

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div>
          <label htmlFor="profile-name" className="block mb-1.5 text-sm font-bold">Full name</label>
          <input
            id="profile-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            readOnly={!isEditing}
            required
            className={inputClass(isEditing)}
          />
        </div>

        <div>
          <label htmlFor="profile-email" className="block mb-1.5 text-sm font-bold">Email</label>
          <input
            id="profile-email"
            type="email"
            value={user.email}
            readOnly
            className={inputClass(false)}
          />
        </div>

        {isEditing ? (
          <div className="flex gap-2">
            <button type="submit" className="flex-1 rounded-lg bg-(--accent) px-4 py-2 text-sm text-white">
              Save
            </button>
            <button type="button" onClick={handleCancel} className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-sm">
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-white"
          >
            Edit details
          </button>
        )}
      </form>
    </div>
  )
}

export default UserDetails