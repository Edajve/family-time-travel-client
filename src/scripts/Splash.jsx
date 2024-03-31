import React from 'react';
import { Box, Text, Button, useTheme } from '@chakra-ui/react';

const splashStyles = (theme) => ({
  splashTitleContainerDark: {
    width: "300px"
    , padding: theme.space.sm
    , '@media screen and (min-width: 600px)': {
      padding: theme.space.md
      ,
    }
    , '@media screen and (min-width: 768px)': {
      padding: theme.space.lg
      ,
    }
    ,
  }
  , splashDescriptionDark: {
    color: theme.colors.textMainDeemphasize
    , fontSize: theme.fontSizes.sm
    , marginTop: theme.space.lg
    , lineHeight: "28px"
    , marginLeft: theme.space.md
    , '@media screen and (min-width: 600px)': {
      lineHeight: "30px"
      , marginLeft: theme.space.lg
      , paddingTop: theme.space.sm
      ,
    }
    ,
  }
  , splashTitleDark: {
    color: theme.colors.textMain
    , fontSize: theme.fontSizes.huge
    , fontWeight: "530"
    , letterSpacing: "2"
    , lineHeight: "59px"
    , marginBottom: theme.space.xl
    ,
  }
  , splashDescriptionContainerDark: {
    height: "300px"
    , '@media screen and (min-width: 600px)': {
      width: "350px"
      , marginLeft: theme.space.xl
      ,
    }
    , '@media screen and (min-width: 768px)': {
      width: "400px"
      , marginTop: theme.space.lg
      ,
    }
    , '@media screen and (min-width: 1024px)': {
      marginTop: theme.space.xl
      , marginLeft: theme.space.xxl
      ,
    }
    , '@media screen and (min-width: 1280px)': {
      marginTop: theme.space.xxl
      , marginLeft: theme.space.xxl
      ,
    }
    ,
  }
  , splashHomePageButtonDark: {
    color: theme.colors.background
    , backgroundColor: theme.colors.secondary
    , marginTop: theme.space.xl
    , width: '200px'
    , marginLeft: '20px'
    , '@media screen and (min-width: 600px)': {
      marginLeft: '136px'
      ,
    }
    , '@media screen and (min-width: 768px)': {
      marginLeft: '215px'
      ,
    }
  }
});

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
        <Button sx={styles.splashHomePageButtonDark}>Home</Button>
      </Box>
    </Box>
  );
}

export default Splash;
