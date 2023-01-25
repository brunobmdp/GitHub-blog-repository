import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
`
export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: -5.5rem;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
  justify-content: center;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
  > div {
    flex: 1;
  }

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  h1 + p {
    margin-top: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }

  a {
    position: absolute;
    right: 2rem;
    top: 2.5rem;
    display: flex;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    align-items: center;
    line-height: 1.6;
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border-bottom 0.2s;
    }
  }
`
export const TagsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
  svg {
    color: ${(props) => props.theme['base-label']};
    font-size: 1.25rem;
  }
  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
  }
`
