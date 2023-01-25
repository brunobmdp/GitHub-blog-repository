import { Link, useParams } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IssueContent,
  NavigationContainer,
  PostContainer,
  PostDescription,
  TagsContainer,
} from './styles'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react'
import { issuesApi } from '../../lib/axios'
import dayjs from 'dayjs'

interface PostInfo {
  body: string
  createdAt: string
  title: string
  user: string
  comments: number
  url: string
}

export function Post() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState<PostInfo>()

  async function fetchPost(id: string) {
    const postAddress = `brunobmdp/GitHub-blog-repository/issues/${id}`
    try {
      setLoading(true)
      const response = await issuesApi.get(postAddress)
      const postInfo: PostInfo = {
        body: response.data.body,
        comments: response.data.comments,
        createdAt: response.data.created_at,
        title: response.data.title,
        user: response.data.user.login,
        url: response.data.html_url,
      }
      setPost(postInfo)
    } catch (err) {
      console.log(err)
      alert('Não foi possível carregar o conteúdo do post')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPost(id!)
  }, [id])

  if (loading) {
    return null
  }

  return (
    <>
      {post && (
        <PostContainer>
          <PostDescription>
            <NavigationContainer>
              <Link to="..">
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>voltar</span>
              </Link>
              <a href={post.url}>
                <span>ver no github</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </NavigationContainer>
            <h1>{post.title}</h1>
            <TagsContainer>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                <p>{post.user}</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarDay} />
                <p>{dayjs().to(post.createdAt)}</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faComment} />
                <p>{post.comments} comentários</p>
              </span>
            </TagsContainer>
          </PostDescription>
          <IssueContent>
            <ReactMarkdown
              //  eslint-disable-next-line react/no-children-prop
              children={post.body}
              remarkPlugins={[remarkGfm]}
            />
          </IssueContent>
        </PostContainer>
      )}
    </>
  )
}
