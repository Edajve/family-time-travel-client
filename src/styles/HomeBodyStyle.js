export const HomeBodyStyle = (theme) => ({
    homeBodyContainer: {
        width: '100%'
        , height: '100%'
        , display: 'flex'
        , flexDirection: 'column'
        , '@media screen and (min-width: 768px)': {
            // needs to become flex
            flexDirection: 'row'

        }
    }
    , homeBodyYearPickerContainer: {
        width: '100%'
        , color: theme.colors.textMain
        , '@media screen and (min-width: 768px)': {
            width: '25%'
            , borderRight: '20x solid orange'
        }
    }
    , homeBodyNotesContainer: {
        backgroundColor: theme.colors.background
        , width: '100%'
        , height: '100%'
        , marginTop: theme.space.md
        , '@media screen and (min-width: 768px)': {
            flexGrow: '4'
        }
    }
    , homeBodyNotesCardContainer: {
        backgroundColor: theme.colors.background
        , color: theme.colors.textMain
    }
})

export default HomeBodyStyle