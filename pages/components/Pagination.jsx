// import ReactPaginate from 'react-paginate'
// import { useEffect, useState } from 'react'

// function Pagination() {
//   const [getrepos, setgetRepos] = useState(null)

//   const [pageCount, setpageCount] = useState(0)

//   let limit = 10

//   useEffect(() => {
//     const getrepos = async () => {
//       const res = await fetch(`https://api.github.com/users/${username.repos}`)
//       const data = await res.json()
//       console.log(data)
//       const total = res.headers.get('x-total-count')
//       setpageCount(Math.ceil(total / limit))
//       // console.log(Math.ceil(total/12));
//     }
//   }, [limit])

//   const handlePageClick = async (data) => {
//     console.log(data.selected)

//     let currentPage = data.selected + 1
//   }
//   return (
//     <div className="container">
//       <div className="row m-2">
//         {items.map((item) => {
//           return (
//             <div key={item.id} className="col-sm-6 col-md-4 v my-2">
//               <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
//                 <div className="card-body">
//                   <h5 className="card-title text-center h2">Id :{item.id} </h5>
//                   <h6 className="card-subtitle mb-2 text-muted text-center">{item.email}</h6>
//                   <p className="card-text">{item.body}</p>
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>

//       <ReactPaginate
//         previousLabel={'previous'}
//         nextLabel={'next'}
//         breakLabel={'...'}
//         pageCount={pageCount}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={3}
//         onPageChange={handlePageClick}
//       />
//     </div>
//   )
// }

// export default Pagination
