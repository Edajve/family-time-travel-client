export const UpcomingEventsStyles = (theme) => ({
    UeMainContainer: {
        width: '100%'
        , height: '100%'
        , display: 'flex'
        , flexDirection: 'column'
        , justifyContent: 'space-between'
        , overflow: 'scroll'
    }
    , UeTitleContainer:{
        width: '100%'
        , height: '100%'
        , marginBottom: theme.space.md
    }
    , UeDescription: {
        width: '50%'
        , height: '100%'
    }
    , UeTitle: {
        fontSize: theme.fontSizes.md
        , fontWeight: '700'
        , marginBottom: theme.space.sm
    }
    , UeDescription: {
        fontSize: theme.space.md
    }
    , UeDescriptionContainer: {
        width: '40%'
        , height: '100%'
    }
    , UeIcon: {

    }
})

export default UpcomingEventsStyles