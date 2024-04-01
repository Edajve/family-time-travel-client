import React from 'react'
import { Text, useTheme, Box, Button } from '@chakra-ui/react';
import SettingsStyles from '../styles/SettingsStyles'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Link, Outlet } from "react-router-dom"
import AccountSettings from './AccountSettings';

export const Settings = () => {
  const theme = useTheme();
  const styles = SettingsStyles(theme);

  return (
    <Box
      sx={styles.settingsContainer}
      className='settingsContainer'
    >
      {/* for mobile view */}
      <AccountSettings />
      <Outlet />
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
  )
}

export default Settings