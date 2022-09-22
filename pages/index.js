import React, { useState } from 'react'
import Home from './[username]'
function Forminput() {
  const [fname, setFname] = useState('')

  const handleChange = (e) => {
    setFname(e.target.value)
  }

  return (
    <div>
      <form>
        <label>
          Input username: <input type="text" value={fname} onChange={handleChange} />
        </label>
      </form>
      <Home />
    </div>
  )
}

export default Forminput
