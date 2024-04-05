import { Text, useTheme, Box, Divider } from '@chakra-ui/react';
import SettingsStyles from '../styles/SettingsStyles';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

export const AccountSettings = () => {
    const theme = useTheme();
    const styles = SettingsStyles(theme);
    const { pathname } = useLocation();
    const [isWindowOver768px, setIsWindowOver768px] = useState(window.innerWidth > 768);

    const shouldRenderWrapper = !pathname.startsWith('/settings/');

    /*
        YOU STOPPED HERE YOU ADDED SOME STATE THAT TELLS ME IF THE WIDTH IS OVER 768, IF IT IS 
        THEN WE DONT USE URL NAVIGATION FOR SETTINGS WE DO ALL CONDITIONAL RENDER FOR EACH PAGE, OR
        THINK ABOUT IT FIRST BEFORE IMPLEMENTING
    */
    useEffect(() => {
      const handleResize = () => {
        setIsWindowOver768px(window.innerWidth > 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    console.log(isWindowOver768px)

    return (
        <>
            {shouldRenderWrapper && (

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
                            <Link to="/settings/account">
                                <Box className='settingsMobileBodyAccount' sx={styles.settingsMobileBodyAccount}>
                                    <Text className='settingsMobileBodyAccountText' sx={styles.settingsMobileBodyAccountText}>
                                        Account
                                    </Text>
                                </Box>
                            </Link>
                            <Divider pt={4} mb={4} />
                            <Link to="/settings/privacy-security">
                                <Box className='settingsMobileBodyPrivacySecurity' sx={styles.settingsMobileBodyPrivacySecurity}>
                                    <Text className='settingsMobileBodyPrivacySecurityText' sx={styles.settingsMobileBodyPrivacySecurityText}>
                                        Privacy & Security
                                    </Text>
                                </Box>
                            </Link>
                            <Divider pt={4} mb={4} />
                            <Link to="/settings/notification">
                                <Box className='settingsMobileBodyNotification' sx={styles.settingsMobileBodyNotification}>
                                    <Text className='settingsMobileBodyNotificationText' sx={styles.settingsMobileBodyNotificationText}>
                                        Notification
                                    </Text>
                                </Box>
                            </Link>
                            <Divider pt={4} mb={4} />
                            <Link to="/settings/help">
                                <Box className='settingsMobileBodyHelp' sx={styles.settingsMobileBodyHelp}>
                                    <Text className='settingsMobileBodyHelpText' sx={styles.settingsMobileBodyHelpText}>
                                        Help
                                    </Text>
                                </Box>
                            </Link>
                            <Divider pt={4} mb={4} />
                            <Link to="/settings/about">
                                <Box className='settingsMobileBodyAbout' sx={styles.settingsMobileBodyAbout}>
                                    <Text className='settingsMobileBodyAboutText' sx={styles.settingsMobileBodyAboutText}>
                                        About
                                    </Text>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                    
            )}
            <Box className='settingsDesktopBodyContainer' sx={styles.settingsDesktopBodyContainer}>neoijodsijfapodsjxt</Box>
        </>
    );
}

export default AccountSettings;
