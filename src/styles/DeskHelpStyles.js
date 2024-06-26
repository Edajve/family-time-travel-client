export const DeskHelpStyles = (theme) => ({
    helpContainer: {
        height: '100%'
        , width: '100%'
        , position: 'relative'
        , color: theme.colors.textMain
        , padding: theme.space.md
        , paddingTop: theme.space.lg
    }
    , helpCard: {
        height: '100%'
        , width: '100%'
        , position: 'absolute'
        , right: '15px'
        , top: '47%'
        , transform: 'translateY(-50%)'
        , border: '1px solid #c0ccc8e6'
        , borderRadius: '20px 120px 20px 20px'
        , padding: theme.space.lg
    }
    , helpForm: {
        width: '100%'
        , height: '100%'
    }
    , formTitle: {
        fontWeight: '700'
    }
    , emailInput: {
        color: theme.colors.background
        , borderColor: theme.colors.background
    }
    , questionLabel: {
        fontWeight: '700'
    }
    , nameInput: {
        borderColor: theme.colors.background
    }
    , questionInput: {
        borderColor: theme.colors.background
        , marginTop: theme.space.md
    }
    , emailLabel: {
        fontWeight: '700'
        , marginTop: theme.space.sm
        , marginBottom: theme.space.sm
    }
    , nameLabel: {
        fontWeight: '700'
        , marginTop: theme.space.sm
        , marginBottom: theme.space.sm
    }
    , helpDivider: {
        marginTop: theme.space.md
        , marginBottom: theme.space.md
    }
    , helpButton: {
        marginTop: theme.space.md
        , backgroundColor: 'green.200'
    }
})

export default DeskHelpStyles