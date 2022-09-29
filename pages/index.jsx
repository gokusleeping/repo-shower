import React, { useState } from 'react'
import { useRouter } from 'next/router'

function Forminput() {
  const router = useRouter()
  const [username, setUsername] = useState('')

  const handleChange = (e) => setUsername(e.target.value)
  const submitForm = (e) => {
    e.preventDefault()
    router.push(`/${username}`)
  }

  return (
    <div className="input1">
      <form onSubmit={submitForm}>
        <label className="label1">
          Input username: <input type="text" value={username} onChange={handleChange} />
        </label>
        <button className="button1" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default Forminput
