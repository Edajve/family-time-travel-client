import { Route, Routes } from "react-router-dom"
import '../styles/app.css'
import { Splash } from './Splash'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Splash />} />
      </Routes>
    </>
  )
}

export default App
