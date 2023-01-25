import { createContext, ReactNode, useEffect, useState } from 'react'
import { searchApi } from '../lib/axios'

interface ResponseData {
  title: string
  number: number
  created_at: string
  body: string
}

interface Issue {
  title: string
  number: number
  created: string
  body: string
}

interface IssuesContextType {
  issues: Issue[]
  fetchIssues: (search: string) => Promise<void>
}
export const IssuesContext = createContext({} as IssuesContextType)

interface IssuesProviderProps {
  children: ReactNode
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues(search: string = '') {
    const query = `issues?q=${search}%20repo:brunobmdp/GitHub-blog-repository`
    console.log(query)
    try {
      const response = await searchApi.get(query)
      const { items } = response.data
      const issuesInfo: Issue[] = items.map((issue: ResponseData) => {
        return {
          body: issue.body,
          title: issue.title,
          number: issue.number,
          created: issue.created_at,
        }
      })
      setIssues(issuesInfo)
    } catch (err) {
      alert('Não foi possível carregar os posts')
      console.log(err)
    }
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
