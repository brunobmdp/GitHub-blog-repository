import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { PostsSearchForm } from './components/PostsSearchForm'

import { HomeContainer, ProfileContainer, TagsContainer } from './styles'
import { PublicationsList } from './components/PublicationsList'
import { useEffect, useState } from 'react'
import { userApi } from '../../lib/axios'

interface UserInfo {
  avatar: string
  bio: string
  company: string
  followers: number
  login: string
  name: string
  url: string
}

export function Home() {
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUser('brunobmdp')
  }, [])

  async function fetchUser(userName: string) {
    try {
      setLoading(true)
      const response = await userApi.get(`${userName}`)
      const {
        avatar_url: avatar,
        bio,
        company,
        followers,
        login,
        name,
        html_url: url,
      } = response.data
      const newUserInfo: UserInfo = {
        avatar,
        bio,
        company,
        followers,
        login,
        name,
        url,
      }

      setUserInfo(newUserInfo)
    } catch (err) {
      alert('Não foi possível carregar as informações do usuário')
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return null
  }

  return (
    <HomeContainer>
      <ProfileContainer>
        <img src={userInfo?.avatar} alt="" />
        <div>
          <h1>{userInfo?.name}</h1>
          <p>{userInfo?.bio}</p>
          <TagsContainer>
            <span>
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <p>{userInfo?.login}</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} size="lg" />
              <p>{userInfo?.company}</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} size="lg" />
              <p>{userInfo?.followers} seguidores</p>
            </span>
          </TagsContainer>
        </div>
        <a href={userInfo?.url}>
          github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </ProfileContainer>
      <PostsSearchForm />
      <PublicationsList />
    </HomeContainer>
  )
}
