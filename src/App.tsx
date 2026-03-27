import { useState } from 'react'
import './App.css'
import Routing from './Routes/routing'
import Sidebar from './components/sidebar'

function App() {
const [leftsidebar, setLeftsidebar] = useState<boolean>(true)
  return (
    <div className="flex min-h-screen">
      <Sidebar
        isLeftbar={leftsidebar}
        changeIsLeftbar={(value) => setLeftsidebar(value)}
      />
      <Routing />
    </div>
  )
}

export default App
