import { Route, Routes } from "react-router-dom"
import { Splash } from './Splash'
import { NotFound } from './NotFound'


function App() {

  return (
    <>
      <Routes>
        <Route path='/splash' element={<Splash />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
