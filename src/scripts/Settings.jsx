import { useTheme, Box } from '@chakra-ui/react';
import SettingsStyles from '../styles/SettingsStyles'
import { Outlet } from "react-router-dom"
import AccountPage from './AccountPage';

export const Settings = () => {
  const theme = useTheme();
  const styles = SettingsStyles(theme);

  return (
    <>
      <Outlet />
      <Box sx={styles.settingsContainer} className='settingsContainer'>
        <AccountPage />
      </Box>
    </>
  )
}

export default Settings