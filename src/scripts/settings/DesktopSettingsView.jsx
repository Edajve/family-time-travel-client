import { Text, useTheme, Box, VStack, Icon } from '@chakra-ui/react';
import SettingsStyles from '../../styles/SettingsStyles';


const DesktopSettingsView = () => {
    const theme = useTheme();
    const styles = SettingsStyles(theme);

    const settingOptions = [
        'Account'
        , 'Privacy & Security'
        , 'Notification'
        , 'Help'
        , 'About'
    ]

    return (
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
    )
}

export default DesktopSettingsView