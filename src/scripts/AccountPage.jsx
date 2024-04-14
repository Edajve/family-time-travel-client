import { Text, useTheme, Box, Divider, VStack, Icon } from '@chakra-ui/react';
import SettingsStyles from '../styles/SettingsStyles';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

const AccountPage = () => {
    const theme = useTheme();
    const styles = SettingsStyles(theme);
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

    const settingOptions = [
        'Account'
        , 'Privacy & Security'
        , 'Notification'
        , 'Help'
        , 'About'
    ]

    return (
        <>
            {/* We are rendering either the mobile or the desktop view of the settings page based off the width being 768px */}
            {renderMobileSettings ? (
                // <MobileSettingsView />
                <Box className='settingsGridContainer' sx={styles.settingsGridContainer}>
                <Box className='settingsMobileNav' sx={styles.settingsMobileNav}>
                    <Box className='settingsMobileNavHeaderContainer' sx={styles.settingsMobileNavHeader}>
                        <Text className='settingsMobileNavBackIcon' sx={styles.settingsMobileNavBackIcon}>
                            <Link to='/home'>
                                <ArrowBackIcon boxSize={8} />
                            </Link>
                        </Text>
                    </Box>
                    <Box className='settingsMobileNavHeaderContainer' sx={styles.settingsMobileNavHeaderContainer}>
                        Settings
                    </Box>
                </Box>
                <Box className='settingsMobileBodyListContainer' sx={styles.settingsMobileBodyListContainer}>
                    <Link to="/settings/mobile/account">
                        <Box className='settingsMobileBodyAccount' sx={styles.settingsMobileBodyAccount}>
                            <Text className='settingsMobileBodyAccountText' sx={styles.settingsMobileBodyAccountText}>
                                Account
                            </Text>
                        </Box>
                    </Link>
                    <Divider pt={4} mb={4} />
                    <Link to="/settings/mobile/privacy-security">
                        <Box className='settingsMobileBodyPrivacySecurity' sx={styles.settingsMobileBodyPrivacySecurity}>
                            <Text className='settingsMobileBodyPrivacySecurityText' sx={styles.settingsMobileBodyPrivacySecurityText}>
                                Privacy & Security
                            </Text>
                        </Box>
                    </Link>
                    <Divider pt={4} mb={4} />
                    <Link to="/settings/mobile/notification">
                        <Box className='settingsMobileBodyNotification' sx={styles.settingsMobileBodyNotification}>
                            <Text className='settingsMobileBodyNotificationText' sx={styles.settingsMobileBodyNotificationText}>
                                Notification
                            </Text>
                        </Box>
                    </Link>
                    <Divider pt={4} mb={4} />
                    <Link to="/settings/mobile/help">
                        <Box className='settingsMobileBodyHelp' sx={styles.settingsMobileBodyHelp}>
                            <Text className='settingsMobileBodyHelpText' sx={styles.settingsMobileBodyHelpText}>
                                Help
                            </Text>
                        </Box>
                    </Link>
                    <Divider pt={4} mb={4} />
                    <Link to="/settings/mobile/about">
                        <Box className='settingsMobileBodyAbout' sx={styles.settingsMobileBodyAbout}>
                            <Text className='settingsMobileBodyAboutText' sx={styles.settingsMobileBodyAboutText}>
                                About
                            </Text>
                        </Box>
                    </Link>
                </Box>
            </Box>
            ) : (
                <Box className='settingsGridDesktopContainer' sx={styles.settingsGridDesktopContainer}>
                    <Box className='settingsGridDesktopNavContainer' sx={styles.settingsGridDesktopNavContainer}>
                        <VStack
                            align='stretch'
                        >
                            <Box className='settingsGridDesktopNavTitle' sx={styles.settingsGridDesktopNavTitle}>
                                <Box className='settingsGridDesktopNavUsersIcon' sx={styles.settingsGridDesktopNavUsersIcon}>
                                    <Icon className='settingsGridDesktopNavUsersIconElement' sx={styles.settingsGridDesktopNavUsersIconElement} viewBox="0 0 24 24" width="10px" height="10px">
                                        <path
                                            fill="currentColor"
                                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                                        />
                                    </Icon>
                                </Box>
                                <Box className='settingsGridDesktopNavUsersName' sx={styles.settingsGridDesktopNavUsersName}>
                                    James Bond
                                </Box>
                            </Box>
                            <Box className='settingsGridDesktopNavSettingsText' sx={styles.settingsGridDesktopNavSettingsText}>
                                <Text className='settingsGridDesktopNavSettingsTextElement' sx={styles.settingsGridDesktopNavSettingsTextElement}>
                                    Settings
                                </Text>
                            </Box>
                            <Box className='settingsGridDesktopNavSettingsList' sx={styles.settingsGridDesktopNavSettingsList}>
                                <Box>
                                    Account
                                </Box>
                            </Box>
                        </VStack>
                    </Box>
                    <Box className='settingsGridDesktopMainContextContainer' sx={styles.settingsGridDesktopMainContextContainer}>ho</Box>
                </Box>
            )}

        </>
    );
}

export default AccountPage;
