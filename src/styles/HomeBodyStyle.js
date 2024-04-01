export const HomeBodyStyle = (theme) => ({
    homeBodyContainer: {
        width: '100%'
        , height: '100%'
        , display: 'flex'
        , flexDirection: 'column'
        , '@media screen and (min-width: 768px)': {
            // needs to become 
            flexDirection: 'row'

        }
    }
    , homeBodyYearPickerContainer: {
        width: '100%'
        , color: theme.colors.textMain
        , '@media screen and (min-width: 768px)': {
            width: '25%'
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
        , width: '95%'
    }
    , homeBodyNotesCardTitle: {
        fontWeight: '300'
        , paddingLeft: theme.space.md
    }
    , bodyNoteInput: {
        height: '120px'
    }
    , bodyNoteTitle: {
        paddingBottom: theme.space.sm
    }
    , bodyEmotionSelect: {
        width: '%50'
        , marginTop: theme.space.md
    }
    , bodySubmitButton: {
        color: theme.colors.textMain
    , fontWeight: '200'
    , backgroundColor: theme.colors.background
    , marginLeft: 'auto'
    , marginTop: theme.space.md
    , _hover: {
      backgroundColor: theme.colors.background,
      color: theme.colors.textMainDeemphasize
    }
    }
})

export default HomeBodyStyle