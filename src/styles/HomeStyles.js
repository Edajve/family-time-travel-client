export const homeStyles = (theme) => ({
    homeContainer: {
        height: '100vh'
        , width: '100vw'
        , background: `radial-gradient(circle at center right, #D7C2C9 -200%, #283d36 50%)`,
    }
    , hamburgerIcon: {
        textAlign: 'end',
    }
    , homeBodyContainer: {

    }
    , homeBodyInformationGrid: {
        width: '100%'
        , height: '300px'
        , borderBottom: '1px solid white',
    }
    , homeBodyCardGrid: {
        display: 'flex'
        , flexWrap: 'wrap'
        , justifyContent: 'space-evenly'
        , alignItems: 'flex-start'
        , gap: '15px'
        , padding: '15px',
    }
    , homeBodyLargeCard: {
        flex: '1 1 400px'
        , height: '250px'
        , border: '0.5px solid #c0ccc897'
        , backgroundColor: theme.colors.background
        , borderRadius: theme.space.sm,
    }
    , homeBodyMediumCard: {
        flex: '1 1 300px'
        , height: '250px'
        , border: '0.5px solid #c0ccc897'
        , backgroundColor: theme.colors.background
        , borderRadius: theme.space.sm,
    }
    , homeBodySmallCard: {
        flex: '1 1 200px'
        , height: '250px'
        , border: '0.5px solid #c0ccc897'
        , backgroundColor: theme.colors.background
        , borderRadius: theme.space.sm,
    },
})
