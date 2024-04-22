export const PrivacyAuthenticationStyles = (theme) => ({
    settingsPrivacySecurityContainer: {
        width: '100%'
        , height: '100%'
    }
    , settingsPrivacySecurityAuthContainer: {
        width: '200px'
        , margin: 'auto'
        , marginTop: '32%'
    }
    , settingsPrivacySecurityAuthText: {
        fontSize: theme.fontSizes.lg
        , color: theme.colors.textMain
        , marginBottom: theme.space.sm
    }
    , settingsPrivacySecurityAuthShowButton: {
        backgroundColor: theme.colors.textMain
    },
    settingsPrivacySecurityInput: {
        borderColor: theme.colors.textMain
        , color: theme.colors.textMain

    }
})

export default PrivacyAuthenticationStyles