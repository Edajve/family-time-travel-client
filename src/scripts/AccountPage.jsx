import { useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'
import MobileSettingsView from './settings/MobileSettingsView'
import DesktopSettingsView from './settings/DesktopSettingsView'

const AccountPage = () => {
    const { pathname } = useLocation()
    const [isWindowOver768px, setIsWindowOver768px] = useState(window.innerWidth > 768)

    const settingsOptions = [
        { name: 'Account', path: 'account' }
        , { name: 'Privacy & Security', path: 'privacy-security' }
        , { name: 'Notification', path: 'notification' }
        , { name: 'Help', path: 'help' }
        , { name: 'About', path: 'about' }

    ]

    useEffect(() => {
        const handleResize = () => {
            setIsWindowOver768px(window.innerWidth > 768)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            {isWindowOver768px ? (
                <DesktopSettingsView settingsOptions={settingsOptions} />
            ) : (
                <MobileSettingsView settingsOptions={settingsOptions} />
            )}
        </>
    )
}

export default AccountPage
