import { useState } from 'react'
import './App.css'
import Routing from './Routes/routing'
import Sidebar from './components/sidebar'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  const [leftsidebar, setLeftsidebar] = useState<boolean>(true)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen">
        <Sidebar
          isLeftbar={leftsidebar}
          changeIsLeftbar={(value) => setLeftsidebar(value)}
        />
        <Routing />
      </div>
    </QueryClientProvider>
  )
}

export default App
