import { useEffect, useState } from 'react'

function Paginate({ page, repoCount, reposPerPage, setPageNumber }) {
  const tabCount = Math.ceil((repoCount || reposPerPage) / reposPerPage)

  return (
    <div
      className="paginate"
      style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 16, width: '100%' }}
    >
      <button className="tab previous" onClick={() => page && setPageNumber((p) => p - 1)}>
        Previous
      </button>
      {new Array(tabCount).fill(null).map((_, idx) => (
        <button key={idx} className={`tab ${idx + 1 === page ? 'active' : ''}`} onClick={() => setPageNumber(idx + 1)}>
          {idx + 1}
        </button>
      ))}
      <button className="tab next" onClick={() => page < tabCount && setPageNumber((p) => p + 1)}>
        Next
      </button>
    </div>
  )
}

export default Paginate
