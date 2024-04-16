import React from 'react'
import { homeStyles } from "../styles/HomeStyles"
import { useTheme, Box } from '@chakra-ui/react'
import Navigation from './navigation/Navigation';
import { NoteBody } from './NoteBody';

export const Home = () => {
  const theme = useTheme();
  const styles = homeStyles(theme);

  return (
    <Box sx={styles.homeContainer} className='homeContainer'>
      <Navigation />
      {/* <NoteBody /> */}
      {/* in the home body is where you would be able to link the not body */}
      <Box sx={styles.homeBodyContainer} className='homeBodyContainer'>

      </Box>
    </Box>
  )
}

export default Home