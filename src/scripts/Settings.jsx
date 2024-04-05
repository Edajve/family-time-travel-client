import React from 'react'
import { useTheme, Box } from '@chakra-ui/react';
import SettingsStyles from '../styles/SettingsStyles'
import { Outlet, useLocation } from "react-router-dom"
import AccountSettings from './AccountSettings';

export const Settings = () => {
  const theme = useTheme();
  const styles = SettingsStyles(theme);
  const { pathname } = useLocation();

  const shouldRenderWrapper = pathname.startsWith('/settings/');

  return (
    <>

     {shouldRenderWrapper && <Outlet />}
    <Box
      sx={styles.settingsContainer}
      className='settingsContainer'
    >
      {/* for mobile view */}
      <AccountSettings />
    
      <Box
        className='settingsFirstGridContainer'
        sx={styles.settingsFirstGridContainer}
      >

      </Box>
      <Box
        className='settingsSecondtGridContainer'
        sx={styles.settingsSecondtGridContainer}
      >
      </Box>
    </Box>
    </>
  )
}

export default Settings