import { BackgroundImage, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import background from '../../assets/backgroundHeader.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <BackgroundImage src={background} />
      </div>
    </HeaderContainer>
  )
}
