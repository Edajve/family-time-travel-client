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
        , fontWeight: 'bold'
        , color: theme.colors.secondary
        , marginBottom: theme.space.sm
    }
    , settingsPrivacySecurityAuthShowButton: {
        backgroundColor: theme.colors.secondary
    }
})

export default PrivacyAuthenticationStyles