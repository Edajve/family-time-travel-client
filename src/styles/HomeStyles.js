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
    , homeBodyInformationTemporaryTitle: {
        fontSize: theme.fontSizes.xxxl
        , fontWeight: 'bold'
        , width: '700px'
        , margin: 'auto'
        , color: theme.colors.textMainDeemphasize
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
        flex: '1 1 350px'
        , height: '250px'
        , border: '0.5px solid #c0ccc897'
        , backgroundColor: theme.colors.background
        , borderRadius: theme.space.sm
        , transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        , cursor: 'pointer'
        , _hover: {
            backgroundColor: theme.colors.textMainDeemphasize
            , color: theme.colors.textMainDeemphasize
            , transform: 'scale(1.02)'
            , boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
    }
    , homeBodyMediumCard: {
        flex: '1 1 200px'
        , height: '250px'
        , border: '0.5px solid #c0ccc897'
        , backgroundColor: theme.colors.background
        , borderRadius: theme.space.sm
        , transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        , cursor: 'pointer'
        , _hover: {
            transform: 'scale(1.02)'
            , boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
    }
    , homeBodySmallCard: {
        flex: '1 1 150px'
        , height: '250px'
        , border: '0.5px solid #c0ccc897'
        , backgroundColor: theme.colors.background
        , borderRadius: theme.space.sm
        , transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        , cursor: 'pointer'
        , _hover: {
            transform: 'scale(1.02)'
            , boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
    }    
})
