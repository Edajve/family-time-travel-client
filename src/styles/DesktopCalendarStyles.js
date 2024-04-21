export const DesktopCalendarStyles = (theme) => ({
    deskCalendarGridContainer: {
        width: '100%'
        , height: '100%'
        , color: theme.colors.textMainDeemphasize
    }
    , deskCalendarGridContainerContainer: {
        width: '100%'
        , height: '200px'
        , marginBottom: theme.space.sm
    }
    , deskCalendarGridItems: {
        width: '100%'
        , '&:hover': {
            backgroundColor: theme.colors.background
            , borderRadius: theme.space.sm
            , border: '2px solid #c0ccc897'
        }
    }
    , deskCalendarGridItemsHighlighted: {
        width: '100%'
        , '&:hover': {
            backgroundColor: theme.colors.background
            , borderRadius: theme.space.sm
            , border: '2px solid #c0ccc897'
        }
    }
    , deskCalendarDayElement: {
        width: '100%'
        , height: '20px'
        , margin: 'auto'
        , borderTop: '1px solid #c0ccc897'
        , textAlign: 'center'
        , fontSize: theme.fontSizes.xs
        , color: theme.colors.textMainDeemphasize
    }
    , deskCalendarDayBox: {
        width: '100%'
    }
    , eskCalendarDayBoxContainer: {
        width: '100%'
        , justifyContent: 'space-between'
        , marginBottom: 0
    }
    , deskCalendarGridDayNumber: {
        textAlign: 'center'
        , marginTop: theme.space.xs
        , fontSize: theme.fontSizes.xs
        , cursor: 'pointer'
    }
    , deskCalendarGridHighLightedNumber: {
        width: '22px'
        , height: '22px'
        , backgroundColor: theme.colors.textMain
        , margin: 'auto'
        , borderTop: '1px solid #c0ccc897'
        , textAlign: 'center'
        , borderRadius: '100%'
        , marginTop: theme.space.xs
        , paddingBottom: theme.space.md
    },
    deskCalendarGridDayNumberHighLight: {
        paddingBottom: theme.space.xs
        , color: theme.colors.background
    },
    deskCalendarNumberElement: {
        color: theme.colors.textMainDeemphasize
        , marginTop: theme.space.sm
    }
})

export default DesktopCalendarStyles