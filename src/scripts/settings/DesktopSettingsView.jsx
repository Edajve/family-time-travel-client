import { Text, useTheme, Box, VStack, Icon } from '@chakra-ui/react';
import { InfoIcon, LockIcon, BellIcon, QuestionOutlineIcon, SettingsIcon } from '@chakra-ui/icons';
import SettingsStyles from '../../styles/SettingsStyles';
import { Link } from "react-router-dom";

const DesktopSettingsView = () => {
    const theme = useTheme();
    const styles = SettingsStyles(theme);

    const settingOptions = [
        { name: 'Account', icon: SettingsIcon },
        { name: 'Privacy & Security', icon: LockIcon },
        { name: 'Notification', icon: BellIcon },
        { name: 'Help', icon: QuestionOutlineIcon },
        { name: 'About', icon: InfoIcon }
    ];

    return (
        <Box className='settingsGridDesktopContainer' sx={styles.settingsGridDesktopContainer}>
            <Box className='settingsGridDesktopNavContainer' sx={styles.settingsGridDesktopNavContainer}>
                <VStack align='stretch'>
                    <Box className='settingsGridDesktopNavTitle' sx={styles.settingsGridDesktopNavTitle}>
                        <Box className='settingsGridDesktopNavUsersIcon' sx={styles.settingsGridDesktopNavUsersIcon}>
                            {/* User Icon */}
                            <Icon as={SettingsIcon} viewBox="0 0 24 24" width="10px" height="10px" sx={styles.settingsGridDesktopNavUsersIconElement} />
                        </Box>
                        <Box className='settingsGridDesktopNavUsersName' sx={styles.settingsGridDesktopNavUsersName}>
                            James Bond
                        </Box>
                    </Box>
                    <Box className='settingsGridDesktopNavSettingsText' sx={styles.settingsGridDesktopNavSettingsText}>
                        <Text sx={styles.settingsGridDesktopNavSettingsTextElement}>
                            Settings
                        </Text>
                    </Box>
                    <Box className='settingsGridDesktopNavSettingsList' sx={styles.settingsGridDesktopNavSettingsList}>
                        {settingOptions.map((option) => (
                            <Link to="/settings/mobile/account">
                                <Box key={option.name} className='settingsGridDesktopNavSettingsListElement' sx={styles.settingsGridDesktopNavSettingsListElement}>
                                    <Box className='settingsGridDesktopNavSettingsListElementIcon' sx={styles.settingsGridDesktopNavSettingsListElementIcon}>
                                        <Icon as={option.icon} sx={styles.settingsGridDesktopNavSettingsListElementIconTag} />
                                    </Box>
                                    <Box className='settingsGridDesktopNavSettingsListElementName' sx={styles.settingsGridDesktopNavSettingsListElementName}>
                                        <Text sx={styles.settingsGridDesktopNavSettingsListElementNameTag}>
                                            {option.name}
                                        </Text>
                                    </Box>
                                </Box>
                            </Link>
                        ))}
                    </Box>
                </VStack>
            </Box>
            <Box className='settingsGridDesktopMainContextContainer' sx={styles.settingsGridDesktopMainContextContainer}>
                hello
            </Box>
        </Box>
    );
}

export default DesktopSettingsView;
