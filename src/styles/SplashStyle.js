export const splashStyles = (theme) => ({
  splashTitleContainerDark: {
    width: "1000px"
    , padding: theme.space.sm
    , '@media screen and (min-width: 600px)': {
      padding: theme.space.md
    }
    , '@media screen and (min-width: 768px)': {
      padding: theme.space.lg
    }
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
    }
  }
  , splashTitleDark: {
    color: theme.colors.textMain
    , fontSize: theme.fontSizes.huge
    , fontWeight: "530"
    , letterSpacing: "1px"
    , lineHeight: "59px"
    , marginBottom: theme.space.xl
    , width: '1000px'
  }
  , splashDescriptionContainerDark: {
    height: "300px"
    , '@media screen and (min-width: 600px)': {
      width: "350px"
      , marginLeft: theme.space.xl
    }
    , '@media screen and (min-width: 768px)': {
      width: "400px"
      , marginTop: theme.space.lg
      ,
    }
    , '@media screen and (min-width: 1024px)': {
      marginTop: theme.space.xl
      , marginLeft: theme.space.xxl
    }
    , '@media screen and (min-width: 1280px)': {
      marginTop: theme.space.xxl
      , marginLeft: theme.space.xxl
    }
  }
  , splashHomePageButtonDark: {
    color: theme.colors.background
    , backgroundColor: theme.colors.secondary
    , marginTop: theme.space.xl
    , width: '200px'
    , marginLeft: '75px'
    , '@media screen and (min-width: 600px)': {
      marginLeft: '125px'
    }
    , '@media screen and (min-width: 768px)': {
      marginLeft: '200px'
    }
  }
})

export default splashStyles