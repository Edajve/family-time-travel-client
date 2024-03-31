export const navigationStyles = (theme) => ({
    hamburgerIconContainer: {
        height: '8vh'
        , width: '100vw'
        , padding: theme.space.md
        , display: 'flex'
        , justifyContent: 'flex-end'
        , '@media screen and (min-width: 768px)': {
            display: 'none'
          }
    }
    , hamburgerButton: {
        color: theme.colors.textMain,
    }
    , desktopAccountDropwodn : {
      display: 'none'
      , '@media screen and (min-width: 768px)': {
        display: 'inline'
      }
    , 
    }
});

export default navigationStyles;