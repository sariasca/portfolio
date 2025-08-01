import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route index element={<Home />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
