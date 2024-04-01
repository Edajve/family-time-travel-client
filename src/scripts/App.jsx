import { Route, Routes } from "react-router-dom"
import { Splash } from './Splash'
import { NotFound } from './NotFound'
import { Home } from './Home'
import { Settings } from './Settings'
import { PrivacySecurity } from "./settings/PrivacySecurity"
import { Notification } from "./settings/Notification"
import { Help } from "./settings/Help"
import { About } from "./settings/About"
import Account from "./settings/Account"

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Splash />} />
        <Route path='/splash' element={<Splash />} />
        <Route path='/home' element={<Home />} />
        <Route path='/settings' element={<Settings />}>
          <Route index element={<Settings />} />
          <Route path='account' element={<Account />} />
          <Route path='privacy-security' element={<PrivacySecurity />} />
          <Route path='notification' element={<Notification />} />
          <Route path='help' element={<Help />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
