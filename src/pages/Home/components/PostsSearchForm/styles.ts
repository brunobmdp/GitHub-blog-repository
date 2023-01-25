import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: bold;
      font-size: 1.125rem;
      line-height: 1.6;
    }
    span {
      color: ${(props) => props.theme['base-span']};
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }
`
export const InputContainer = styled.input`
  border: 0;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
