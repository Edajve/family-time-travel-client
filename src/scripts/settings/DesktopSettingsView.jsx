import { Text, useTheme, Box, VStack, Icon } from '@chakra-ui/react';
import { InfoIcon, LockIcon, BellIcon, QuestionOutlineIcon, SettingsIcon, HamburgerIcon } from '@chakra-ui/icons';
import SettingsStyles from '../../styles/SettingsStyles';
import { useState } from 'react';
import DeskAccount from '../settings/desktopSettingOptionVIews/DeskAccount'
import DeskPrivacyAndSec from '../settings/desktopSettingOptionVIews/DeskPrivacyAndSec'
import DeskNofiy from '../settings/desktopSettingOptionVIews/DeskNofiy'
import DeskHelp from '../settings/desktopSettingOptionVIews/DeskHelp'
import DeskAbout from '../settings/desktopSettingOptionVIews/DeskAbout'

const DesktopSettingsView = ({ settingsOptions }) => {
    const theme = useTheme();
    const styles = SettingsStyles(theme);
    const [settingState, setSettingState] = useState("");

    const setMainPanelOnChange = () => {
        switch (settingState) {
            case 'Account':
                return <DeskAccount />;
            case 'Privacy & Security':
                return <DeskPrivacyAndSec />;
            case 'Notification':
                return <DeskNofiy />;
            case 'Help':
                return <DeskHelp />;
            case 'About':
                return <DeskAbout />;
            default:
                return ""
        }
    };

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
            case 'Home':
                return HamburgerIcon;
            default:
                return SettingsIcon; // Default icon
        }
    };

    const navigateSettingPage = (optionName) => {
        setSettingState(optionName);
    };

    return (
        <Box className='settingsGridDesktopContainer' sx={styles.settingsGridDesktopContainer}>
            <Box className='settingsGridDesktopNavContainer' sx={styles.settingsGridDesktopNavContainer}>
                <VStack align='stretch'>
                    <Box className='settingsGridDesktopNavTitle' sx={styles.settingsGridDesktopNavTitle}>
                        <Box className='settingsGridDesktopNavUsersIcon' sx={styles.settingsGridDesktopNavUsersIcon}>
                            <Icon as={SettingsIcon} viewBox="0 0 24 24" width="24px" height="24px" sx={styles.settingsGridDesktopNavUsersIconElement} />
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
                            <Box
                                key={option.name}
                                className='settingsGridDesktopNavSettingsListElement'
                                sx={styles.settingsGridDesktopNavSettingsListElement}
                                onClick={() => navigateSettingPage(option.name)}
                            >
                                <Box className='settingsGridDesktopNavSettingsListElementIcon' sx={styles.settingsGridDesktopNavSettingsListElementIcon}>
                                    <Icon as={getIconForOption(option.name)} sx={styles.settingsGridDesktopNavSettingsListElementIconTag} />
                                </Box>
                                <Box className='settingsGridDesktopNavSettingsListElementName' sx={styles.settingsGridDesktopNavSettingsListElementName}>
                                    <Text sx={styles.settingsGridDesktopNavSettingsListElementNameTag}>
                                        {option.name}
                                    </Text>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </VStack>
            </Box>
            <Box className='settingsGridDesktopMainContainer' sx={styles.settingsGridDesktopMainContainer}>
                {setMainPanelOnChange()}
            </Box>
        </Box>
    );
};

export default DesktopSettingsView;
