import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyle from 'styles/GlobalStyle'
import { Provider } from 'react-redux'
import Store from 'store'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={Store}>
      <App />
    </Provider>
  </ThemeProvider>,
)

reportWebVitals()
