import { Text, useTheme, Box, VStack, Icon } from '@chakra-ui/react';
import { InfoIcon, LockIcon, BellIcon, QuestionOutlineIcon, SettingsIcon } from '@chakra-ui/icons';
import SettingsStyles from '../../styles/SettingsStyles';
import { Link } from "react-router-dom";

const DesktopSettingsView = ({ settingsOptions }) => {
    const theme = useTheme();
    const styles = SettingsStyles(theme);

    const getIconForOption = (optionName) => {
        switch (optionName) {
            case 'Privacy & Security':
                return LockIcon;
            case 'Notification':
                return BellIcon;
            case 'Help':
                return QuestionOutlineIcon;
            case 'About':
                return InfoIcon;
            default:
                return SettingsIcon; // Default icon
        }
    };

    return (
        <Box className='settingsGridDesktopContainer' sx={styles.settingsGridDesktopContainer}>
            <Box className='settingsGridDesktopNavContainer' sx={styles.settingsGridDesktopNavContainer}>
                <VStack align='stretch'>
                    <Box className='settingsGridDesktopNavTitle' sx={styles.settingsGridDesktopNavTitle}>
                        <Box className='settingsGridDesktopNavUsersIcon' sx={styles.settingsGridDesktopNavUsersIcon}>
                            <Icon as={SettingsIcon} viewBox="0 0 24 24" width="10px" height="10px" sx={styles.settingsGridDesktopNavUsersIconElement} />
                        </Box>
                        <Box className='settingsGridDesktopNavUsersName' sx={styles.settingsGridDesktopNavUsersName}>
                            Settings
                        </Box>
                    </Box>
                    <Box className='settingsGridDesktopNavSettingsText' sx={styles.settingsGridDesktopNavSettingsText}>
                        <Text sx={styles.settingsGridDesktopNavSettingsTextElement}>
                            Manage Your Account
                        </Text>
                    </Box>
                    <Box className='settingsGridDesktopNavSettingsList' sx={styles.settingsGridDesktopNavSettingsList}>
                        {settingsOptions.map((option) => (
                            <Link key={option.name} to={`/settings/${option.path}`}>
                                <Box className='settingsGridDesktopNavSettingsListElement' sx={styles.settingsGridDesktopNavSettingsListElement}>
                                    <Box className='settingsGridDesktopNavSettingsListElementIcon' sx={styles.settingsGridDesktopNavSettingsListElementIcon}>
                                        <Icon as={getIconForOption(option.name)} sx={styles.settingsGridDesktopNavSettingsListElementIconTag} />
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
        </Box>
    );
};

export default DesktopSettingsView;
