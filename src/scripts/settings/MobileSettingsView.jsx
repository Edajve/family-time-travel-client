import { Text, useTheme, Box, Divider } from '@chakra-ui/react';
import SettingsStyles from '../../styles/SettingsStyles';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";

 const MobileSettingsView = () => {
    const theme = useTheme();
    const styles = SettingsStyles(theme);
    return (
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
    )
}

export default MobileSettingsView