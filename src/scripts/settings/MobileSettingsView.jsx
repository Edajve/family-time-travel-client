import { Text, useTheme, Box, Divider, VStack } from '@chakra-ui/react'
import SettingsStyles from '../../styles/SettingsStyles'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"

const MobileSettingsView = ({ settingsOptions }) => {
    const theme = useTheme()
    const styles = SettingsStyles(theme)

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
                <VStack spacing={4} divider={<Divider />}>
                    {settingsOptions.map((option, index) => (
                        <Link key={index} to={`/settings/${option.path}`}>
                            <Box className='settingsMobileBodyOption' sx={styles.settingsMobileBodyOption}>
                                <Text className='settingsMobileBodyOptionText' sx={styles.settingsMobileBodyOptionText}>
                                    {option.name}
                                </Text>
                            </Box>
                        </Link>
                    ))}
                </VStack>
            </Box>
        </Box>
    )
}

export default MobileSettingsView
