import { ThemeProvider } from '@emotion/react'
import './App.css'
import Home from './pages/Home'
import theme from './theme'
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  )
}

export default App
