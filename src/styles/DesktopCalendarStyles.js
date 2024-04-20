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
    },
    deskCalendarDayBoxContainer: {
        width: '100%'
        , justifyContent: 'space-between'
        , marginBottom: 0
    },
    deskCalendarGridDayNumber: {
        textAlign: 'center'
        , marginTop: theme.space.xs
    }
})

export default DesktopCalendarStyles