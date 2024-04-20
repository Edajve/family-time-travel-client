export const NoteCardStyles = (theme) => ({
    homeContainer: {
        width: '100vw'
        , height: '100%'
        , display: 'flex'
        , justifyContent: 'space-between'
    }
    , splashTitleContainerDark: {
        width: '700px'
    }
    , noteCardDescriptionContainer: {
        height: '100%'
        , width: '50%'
    }
    , noteCardPictureContainer: {
        height: 'auto'
        , width: 'auto'
    }
    , noteCardImageAndText:{
        height: '100%'
        , width: '40%'
    }
    , noteCardPictureTag: {
        opacity: '40%'
        , objectFit: 'cover'
        , alt: 'Diary'
        , width: '200px'
    }
    , noteCardPictureTextElement: {
        fontSize: theme.fontSizes.xs
        , marginBottom: theme.space.sm
    }
    , noteCardTitleText: {
        fontSize: theme.fontSizes.md
        , fontWeight: '700'
        , marginBottom: theme.space.sm
        , width: '800px'
    }
    , noteCardDescriptionText: {
        fontSize: theme.fontSizes.sm
        , color: theme.colors.deemphasized
    }
    , noteCardQuoteAuthor: {
        marginLeft: theme.space.sm
        , fontWeight: '700'
    }
})

export default NoteCardStyles