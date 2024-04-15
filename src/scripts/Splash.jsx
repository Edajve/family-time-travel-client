import React from 'react';
import { Box, Text, Button, useTheme } from '@chakra-ui/react';
import { Link } from "react-router-dom"
import { splashStyles } from '../styles/SplashStyle.js'

export const Splash = () => {
  const theme = useTheme();
  const styles = splashStyles(theme);

  return (
    <Box sx={styles.splashTitleContainerDark}>
      <Text as="span" sx={styles.splashTitleDark}>Echols Time Portal</Text>
      <Box sx={styles.splashDescriptionContainerDark}>
        <Text sx={styles.splashDescriptionDark}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Earum tempora aut quos? Distinctio, quisquam molestias.
          Enim commodi voluptate amet cupiditate numquam dicta voluptatibus!
          Ullam odit omnis voluptatum, eos magni libero.
        </Text>
        <Link to='/home'>
          <Button sx={styles.splashHomePageButtonDark}>Home</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Splash;
