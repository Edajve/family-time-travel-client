import React from 'react'
import { homeStyles } from "../styles/HomeStyles"
import { useTheme, Box } from '@chakra-ui/react'
import MobileNav from './MobileNav';

export const Home = () => {
  const theme = useTheme();
  const styles = homeStyles(theme);

  return (
    <Box sx={styles.homeContainer} className='homeContainer'>
      <MobileNav />
    </Box>
  )
}

export default Home