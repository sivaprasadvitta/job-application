import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MantineProvider } from '@mantine/core'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <MantineProvider
    theme={{
      fontFamily: 'Inter, sans-serif',
      colors: {
        brand: ['#f5f5ff', /* … */, '#6f4eff'],   // add your purple gradient stops
        blue: ['#e7f5ff', '#cceeff', /* … */, '#339af0'],
      },
      primaryColor: 'blue',
      defaultRadius: 12,
      components: {
        Button: { styles: (theme) => ({ root: { fontWeight: 500 } }) },
        Input: { styles: (theme) => ({ input: { borderColor: theme.colors.gray[4] } }) },
        Select: { styles: (theme) => ({ input: { borderColor: theme.colors.gray[4] } }) },
      },
    }}
    withGlobalStyles
    withNormalizeCSS
  >
    <App />
  </MantineProvider>

)
