import dayjs from 'dayjs'
import { useContext } from 'react'
import { IssuesContext } from '../../../../context/IssuesContext'
import { PublicationsContainer, Publication, PublicationTitle } from './styles'

export function PublicationsList() {
  const { issues } = useContext(IssuesContext)

  return (
    <PublicationsContainer>
      {issues.map((issue) => {
        return (
          <Publication key={issue.number} to={`/post/${issue.number}`}>
            <PublicationTitle>
              <strong>{issue.title}</strong>
              <span>{dayjs().to(issue.created, false)}</span>
            </PublicationTitle>
            <p>{issue.body}</p>
          </Publication>
        )
      })}
    </PublicationsContainer>
  )
}
