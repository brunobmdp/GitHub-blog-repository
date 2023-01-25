import './lib/dayjs'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IssuesProvider } from './context/IssuesContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <IssuesProvider>
          <Router />
        </IssuesProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
