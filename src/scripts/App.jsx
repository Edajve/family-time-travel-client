import { Route, Routes } from "react-router-dom"
import { Splash } from './Splash'
import { NotFound } from './NotFound'
import { Home } from './Home'
import { Settings } from './Settings'
import { PrivacySecurity } from "./settings/PrivacySecurity"
import { Notification } from "./settings/Notification"
import { Help } from "./settings/Help"
import Account from "./settings/Account"
import About from '../scripts/settings/About'
import DeskAccount from './settings/desktopSettingOptionViews/DeskAccount.jsx'
import NoteBody from "./NoteBody.jsx"
import RSVP from "./rsvpViews/RSVP.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/note" element={<NoteBody />} />
      <Route path="/note" element={<NoteBody />} />
      <Route path="/rsvp" element={<RSVP />} />
      <Route path="/settings/account" element={<Account />} />
      <Route path="/settings/privacy-security" element={<PrivacySecurity />} />
      <Route path="/settings/notification" element={<Notification />} />
      <Route path="/settings/help" element={<Help />} />
      <Route path="/settings/about" element={<About />} />
      <Route path="/setting/desktop/account" element={<DeskAccount />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
