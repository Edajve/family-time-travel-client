export const SettingsStyles = (theme) => ({
    settingsContainer: {
        '@media screen and (min-width: 768px)': {
            height: '70vh'
            , width: '70vw'
            , border: '1px solid #c0ccc897'
            , margin: theme.space.lg
            , borderRadius: theme.space.md
            , color: theme.colors.textMain
        },
    }
    , settingsGridContainer: {
        '@media screen and (min-width: 768px)': {
            height: '70vh'
            , width: '30%'
            , borderRight: '2px solid #c0ccc897'
            , display: 'hidden'
        }
    }
    , settingsFirstGridContainer: {
        width: '100%'
        , color: theme.colors.textMain
        , display: 'hidden'
        , '@media screen and (min-width: 768px)': {
            width: '40%'
            , display: 'inline'
        },
    }
    , settingsMobileNavBackIcon: {
        marginBotton: theme.space.lg
    }
    , settingsSecondtGridContainer: {
        backgroundColor: theme.colors.background
        , width: '100%'
        , height: 'auto%'
        , marginTop: theme.space.md
        , display: 'hidden'
        , '@media screen and (min-width: 768px)': {
            flexGrow: '4',
            display: 'inline',
        }
    }
    , settingsMobileNav: {
        width: '100%'
        , height: '10vh'
        , boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px'
        , padding: theme.space.lg
        , color: theme.colors.textMain
        , fontWeight: '400'
        , display: 'flex'
        , flexDirection: 'row'
        , justifyContent: 'flex-start'
        , gap: theme.space.xl
        , marginBottom: theme.space.lg
        , '@media screen and (min-width: 768px)': {
            flexGrow: '4'
            , display: 'inline'
            , boxShadow: 'rgba(0, 0, 0, 0) 0px 0px60px 0px, rgba(0, 0, 0, 00) 0px 0px 0px 0px'
        }
    }
    , settingsMobileNavHeaderContainer: {
        fontSize: theme.fontSizes.md
        , fontWeight: '200'
        , color: theme.colors.textMain
        , '@media screen and (min-width: 768px)': {
            marginTop: theme.space.xl
        }
    }
    , settingsMobileBodyListContainer: {
        padding: theme.space.md
    }
    // Applying text color to all new text sections
    , settingsMobileBodyPrivacySecurityText: {
        color: theme.colors.textMain
    }
    , settingsMobileBodyNotificationText: {
        color: theme.colors.textMain
    }
    , settingsMobileBodyHelpText: {
        color: theme.colors.textMain
    }
    , settingsMobileBodyAboutText: {
        color: theme.colors.textMain
    }
    , settingsMobileBodyAccount: {}
    , settingsMobileBodyAccountText: {
        color: theme.colors.textMain
    }
    , settingsDesktopBodyContainer: {
        '@media screen and (min-width: 768px)': {
            width: '100%',
            height: '40vh',
        }
    }
    , settingsGridDesktopContainer: {
        width: '100vw'
        , height: '100vh'
        , '@media screen and (min-width: 768px)': {
            display: 'flex'
            , flexDirection: 'row'
            , width: '100%'
            , height: '100%'
        }
    }
    , settingsGridDesktopNavContainer: {
        width: '35%'
        , height: '100%'
        , borderRight: '1px solid #c0ccc8e6'
        , paddingLeft: theme.space.sm
        , paddingRight: theme.space.sm
    }
    , settingsGridDesktopMainContextContainer: {
        backgroundColor: theme.colors.background
        , width: '100%'
        , height: '100%'
    }
    , settingsGridDesktopNavTitle: {
        display: 'flex'
        , flexDirection: 'row'
        , alignItems: 'center'
        , paddingRight: theme.space.sm
        , paddingLeft: theme.space.md
        , marginTop: theme.space.md
        , marginBottom: theme.space.lg
    }
    , settingsGridDesktopNavUsersName: {
        paddingLeft: theme.space.sm
        , fontWeight: '700'
    }
    , settingsGridDesktopNavUsersIcon: {
        display: 'flex'
        , justifyContent: 'center'
        , alignItems: 'center'
        , borderRadius: '50%'
        , width: '21px'
        , height: '21px'
        , bg: 'gray.200'
    },
    settingsGridDesktopNavUsersIconElement: {
        width: '12px'
        , height: '12px'
        , color: 'white'
    }
    , settingsGridDesktopNavSettingsTextElement: {
        fontWeight: '700'
        , paddingLeft: theme.space.md
        , fontSize: theme.fontSizes.sm
    }
    , settingsGridDesktopNavSettingsListElement: {
        display: 'flex'
        , flexDirection: 'row'
        , alignItems: 'center'
        , height: 'auto'
        , paddingBottom: theme.space.sm
        , paddingLeft: theme.space.sm
        , paddingTop: theme.space.sm
        , transition: 'background-color 0.3s ease, color 0.3s ease' // Add this line for transitions
        , _hover: {
            backgroundColor: theme.colors.textMainDeemphasize
            , color: theme.colors.backgroundColor
            , borderRadius: theme.space.sm
            , cursor: 'pointer'
        }
    }
    , settingsGridDesktopNavSettingsListElementIcon: {
        paddingLeft: theme.space.sm
        , paddingRight: theme.space.sm
    }
    , settingsGridDesktopNavSettingsListElementIconTag: {
        paddingBotton: theme.space.md
    }
    , settingsGridDesktopNavSettingsListElementName: {

    }
    , settingsGridDesktopNavSettingsListElementNameTag: {
        marginTop: '3px'
        , fontWeight: '500'
    }
    , settingsGridDesktopMainContainer: {
        width: '100%'
        , height: '100%'
    }
})


export default SettingsStyles