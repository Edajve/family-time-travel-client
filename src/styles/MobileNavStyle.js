export const mobileNavStyles = (theme) => ({
    mobileNavContainer: {
        height: '8vh'
        , width: '100vw'
        , padding: theme.space.md
        , display: 'flex'
        , justifyContent: 'flex-end'
    }
    , hamburgerButton: {
        color: theme.colors.textMain,
    }
});

export default mobileNavStyles;