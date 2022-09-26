import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Card from './components/Card'
import Pagination from './components/Pagination'

const reposPerPage = 9

export default function Home() {
  const { query } = useRouter()
  const [repos, setRepos] = useState([])
  const [userDetails, setUserDetails] = useState({})
  const [pageNumber, setPageNumber] = useState(1)

  const apiUrl = `https://api.github.com/users/${query.username}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        setUserDetails({
          name: data.name,
          bio: data.bio,
          username: data.login,
          location: data.location,
          twitter: data.twitter_username,
          avatar: data.avatar_url,
          repos_url: data.repos_url,
          repo_count: data.public_repos,
        })
      } catch (e) {
        console.error('fetchData', e)
      }
    }

    if (query.username) fetchData()
  }, [query])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const reposResponse = await fetch(userDetails.repos_url + `?per_page=${reposPerPage}&page=${pageNumber}`)
        const repos = await reposResponse.json()
        setRepos(
          repos.map((repo) => ({
            name: repo.name,
            url: repo.html_url,
            topics: repo.topics,
            description: repo.description,
          }))
        )
      } catch (e) {
        console.error('fetchRepos', e)
      }
    }

    if (userDetails) fetchRepos()
  }, [userDetails, pageNumber])

  return (
    <>
      <Head>
        <title>{userDetails.name || userDetails.username || 'User Details'}</title>
      </Head>
      <div className="container">
        <div className="profile">
          <div className="profile__details">
            <div className="profile__details__avatar">
              <Image src={userDetails?.avatar} alt="" width="200" height="200" />
            </div>
            <div className="profile__details__about">
              <h1 className="name">{userDetails?.name || userDetails?.username}</h1>
              <h2 className="decription">{userDetails?.bio}</h2>
              <h3 className="location">
                <img src="" />
                {userDetails?.lLocation}
              </h3>
            </div>
          </div>
          <div className="profile__link">{userDetails.bio}</div>
        </div>

        {repos?.length ? (
          <div className="repos">
            {repos.map((repo, index) => (
              <Card key={index} {...repo} />
            ))}
          </div>
        ) : (
          `No repos`
        )}

        <Pagination
          page={pageNumber}
          repoCount={userDetails.repo_count}
          reposPerPage={reposPerPage}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  )
}
