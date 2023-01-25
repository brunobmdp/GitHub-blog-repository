import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vw / 1440 * 296);

  > img {
    margin-top: 4rem;
    width: 148px;
    height: 98px;
  }
`
export const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  inset: 0;
  width: 100%;
  height: calc(100vw / 1440 * 296);
`
