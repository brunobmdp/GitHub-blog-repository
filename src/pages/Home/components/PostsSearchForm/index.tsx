import { useContext, useEffect, useState } from 'react'
import { IssuesContext } from '../../../../context/IssuesContext'
import { InputContainer, SearchFormContainer } from './styles'

export function PostsSearchForm() {
  const { issues, fetchIssues } = useContext(IssuesContext)
  const [search, setSearch] = useState('')

  async function handleSearchInput(input: string) {
    fetchIssues(input)
  }

  useEffect(() => {
    handleSearchInput(search)
  }, [search])

  return (
    <SearchFormContainer>
      <div>
        <h1>Publicações</h1>
        <span>{issues.length} publicações</span>
      </div>
      <InputContainer
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(event) => setSearch(event.target.value)}
      />
    </SearchFormContainer>
  )
}
