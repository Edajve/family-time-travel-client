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
  , desktopAccountDropDown: {
    marginLeft: 'auto'
    , width: '126px'
  }
  , desktopAccountButton: {
    color: theme.colors.textMain
    , fontWeight: '200'
    , backgroundColor: theme.colors.background
    , marginLeft: 'auto'
    , display: 'none'
    , marginTop: theme.space.md
    , _hover: {
      backgroundColor: theme.colors.background,
      color: theme.colors.textMainDeemphasize
    }
    , '@media screen and (min-width: 768px)': {
      display: 'inline'
    }
  }
  , desktopAccountPopUp: {
    color: theme.colors.background
    , backgroundColor: theme.colors.textMainDeemphasize
    , burderColor: theme.colors.textMainDeemphasize
    , marginRight: theme.space.md
  }
  , desktopAccountSettingsButton: {
    background: theme.colors.secondary
    , color: theme.colors.background
    , _hover: {
      backgroundColor: theme.colors.background,
      color: theme.colors.secondary
    }
  }
});

export default navigationStyles;