import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import MobileSettingsView from './settings/MobileSettingsView';
import DesktopSettingsView from './settings/DesktopSettingsView';

const AccountPage = () => {
    const { pathname } = useLocation();
    const [isWindowOver768px, setIsWindowOver768px] = useState(window.innerWidth > 768);

    // Theres a bug in the App.jsx routes, where the /settings page renders both the settings page and the sub-settings page
    // when user clicks on a specific setting page, so 'isOnTheMainSettingPage' is a quick fix
    const isOnTheMainSettingPage = !pathname.startsWith('/settings/');
    const renderMobileSettings = isOnTheMainSettingPage && !isWindowOver768px

    useEffect(() => {
        const handleResize = () => {
            setIsWindowOver768px(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {/* We are rendering either the mobile or the desktop view of the settings page based off the width being 768px */}
            {renderMobileSettings ? (<MobileSettingsView />) : (<DesktopSettingsView />)}
        </>
    );
}

export default AccountPage;
