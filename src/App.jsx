import { GlobalStyle } from '@/styles/global.styles'
import { Layout } from '@/layout'
import { NavRoutes } from '@/routes'
import { Providers } from '@/providers'

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <Layout>
        <NavRoutes />
      </Layout>
    </Providers>
  )
}

export default App
