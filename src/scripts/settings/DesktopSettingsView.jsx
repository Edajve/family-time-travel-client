import { Text, useTheme, Box, VStack, Icon } from '@chakra-ui/react';
import { InfoIcon, LockIcon, BellIcon, QuestionOutlineIcon, SettingsIcon, HamburgerIcon } from '@chakra-ui/icons';
import SettingsStyles from '../../styles/SettingsStyles';
import { useState } from 'react';
import DeskAccount from '../settings/desktopSettingOptionViews/DeskAccount'
import DeskPrivacyAndSec from '../settings/desktopSettingOptionViews/DeskPrivacyAndSec'
import DeskNofiy from '../settings/desktopSettingOptionViews/DeskNofiy'
import DeskHelp from '../settings/desktopSettingOptionViews/DeskHelp'
import DeskAbout from "../settings/desktopSettingOptionViews/DeskAbout"
import Home from '../Home'
import { Link } from 'react-router-dom';

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
            case 'Home':
                return <Home />;
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
                        <Link to="/home">
                        <Box
                            className='settingsGridDesktopNavSettingsListElement'
                            sx={styles.settingsGridDesktopNavSettingsListElement}
                        >
                            <Box className='settingsGridDesktopNavSettingsListElementIcon' sx={styles.settingsGridDesktopNavSettingsListElementIcon}>
                                <Icon as={HamburgerIcon} sx={styles.settingsGridDesktopNavSettingsListElementIconTag} />
                            </Box>
                            <Box className='settingsGridDesktopNavSettingsListElementName' sx={styles.settingsGridDesktopNavSettingsListElementName}>
                                <Text sx={styles.settingsGridDesktopNavSettingsListElementNameTag}>
                                    Home
                                </Text>
                            </Box>
                        </Box>
                        </Link>
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
