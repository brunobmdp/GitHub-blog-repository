import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PublicationsContainer = styled.nav`
  max-width: 54rem;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

export const Publication = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.875rem;
  height: 16.25rem;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['base-post']};

  > P {
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box !important;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border-color 0.2s;
  }
`
export const PublicationTitle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  > strong {
    flex: 1;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-title']};
  }
  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-span']};
  }
`
