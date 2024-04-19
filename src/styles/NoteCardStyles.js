export const NoteCardStyles = (theme) => ({
    homeContainer: {
        width: '100%'
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
    , noteCardPictureTextContainer: {

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
    , noteCardPictureTextElement: {
        marginBottom: theme.space.sm
    }
    , noteCardQuoteAuthor: {
        marginLeft: theme.space.sm
        , fontWeight: '700'
    }
})

export default NoteCardStyles