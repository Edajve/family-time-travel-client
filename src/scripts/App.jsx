import { Route, Routes } from "react-router-dom"
import { Splash } from './Splash'
import { NotFound } from './NotFound'
import { Home } from './Home'
import { Settings } from './Settings'


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Splash />} />
        <Route path='/splash' element={<Splash />} />
        <Route path='/home' element={<Home />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
