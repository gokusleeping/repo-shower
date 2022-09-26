import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'

function Paginate() {
  const [repos, setRepos] = useState([])

  const [pageCount, setpageCount] = useState(0)

  let limit = 10

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(`https://api.github.com/users/?_page=1&_limit=${limit}`)
      const data = await res.json()
      const total = res.headers.get('x-total-count')
      setpageCount(Math.ceil(total / limit))
      // console.log(Math.ceil(total/12));
      setRepos(data)
    }

    getComments()
  }, [limit])

  const fetchComments = async (currentPage) => {
    const res = await fetch(`http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`)
    const data = await res.json()
    return data
  }

  const handlePageClick = async (data) => {
    console.log(data.selected)

    let currentPage = data.selected + 1

    const commentsFormServer = await fetchComments(currentPage)

    setRepos(commentsFormServer)
    // scroll to the top
    //window.scrollTo(0, 0)
  }
  return (
    <div className="container">
      <div className="row m-2">
        {repos.map((item) => {
          return <div></div>
        })}
      </div>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
      />
    </div>
  )
}

export default Paginate
