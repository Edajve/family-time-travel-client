export const SettingsStyles = (theme) => ({
    settingsContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (min-width: 768px)': {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
    },
    settingsFirstGridContainer: {
        width: '100%',
        color: theme.colors.textMain,
        display: 'hidden',
        '@media screen and (min-width: 768px)': {
            width: '40%',
            display: 'inline',
        },
    },
    settingsSecondtGridContainer: {
        backgroundColor: theme.colors.background,
        width: '100%',
        height: 'auto%',
        marginTop: theme.space.md,
        display: 'hidden',
        '@media screen and (min-width: 768px)': {
            flexGrow: '4',
            display: 'inline',
        },
    },
    settingsMobileNav: {
        width: '100%',
        height: '10vh',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
        padding: theme.space.lg,
        color: theme.colors.textMain,
        fontWeight: '400',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: theme.space.xl,
        marginBottom: theme.space.lg,
    },
    settingsMobileNavHeaderContainer: {
        fontSize: theme.fontSizes.md,
        fontWeight: '200',
        color: theme.colors.textMain,
    },
    settingsMobileBodyListContainer: {
        padding: theme.space.md,
    },
    // Applying text color to all new text sections
    settingsMobileBodyPrivacySecurityText: {
        color: theme.colors.textMain,
    },
    settingsMobileBodyNotificationText: {
        color: theme.colors.textMain,
    },
    settingsMobileBodyHelpText: {
        color: theme.colors.textMain,
    },
    settingsMobileBodyAboutText: {
        color: theme.colors.textMain,
    },
    settingsMobileBodyAccount: {},
    settingsMobileBodyAccountText: {
        color: theme.colors.textMain,
    },
})


export default SettingsStyles