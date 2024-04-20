export const DesktopCalendarStyles = (theme) => ({
    deskCalendarGridContainer: {
        width: '100%'
        , height: '100%'
    }
    , deskCalendarGridContainerContainer: {
        width: '100%'
        , height: '100%'
    }
    , deskCalendarGridItems: {
        border: 'thin solid #c0ccc897'
        , width: '100%'
    }
    , deskCalendarDayElement: {
        width: '100%'
        , height: '20px'
        , margin: 'auto'
        , borderTop: '1px solid #c0ccc897'
        , textAlign: 'center'
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
    }
})

export default DesktopCalendarStyles