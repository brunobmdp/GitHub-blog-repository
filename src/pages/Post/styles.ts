import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
`
export const PostDescription = styled.div`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin-top: -5.5rem;
  border-radius: 10px;

  > h1 {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
  }
`
export const NavigationContainer = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;
    line-height: 1.6;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border-color 0.2s;
    }
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 0.5rem;

  font-size: 1.125rem;
  color: ${(props) => props.theme['base-span']};

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 1.6;
    p {
      font-size: 1rem;
    }
  }
`
export const IssueContent = styled.div`
  padding: 2.5rem 2rem;
  white-space: pre-wrap;
  text-align: justify;
  h3 {
    color: ${(props) => props.theme['base-subtitle']};
  }
  a {
    text-transform: uppercase;
    font-size: 0.875rem;
  }
  img {
    max-width: 100%;
  }
`
