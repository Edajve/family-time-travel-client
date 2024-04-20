export const CalendarStyles = (theme) => ({
    calendarContainer: {
        width: '100%',
        height: '675px',
        color: theme.colors.textMain,
        padding: theme.space.sm,
        paddingLeft: theme.space.lg,
        paddingRight: theme.space.lg
        , '@media screen and (min-width: 768px)': {
            border: '1px solid #c0ccc897'
            , borderRadius: theme.space.md
        }
    },
    calendarHeader: {
        width: '100%',
        height: '10%',
        justifyContent: 'space-between',
        marginBottom: theme.space.lg
    }
    , calendarDivider: {
        '@media screen and (min-width: 768px)': {
            display: 'none'
        }
    }
    , calendarHeaderDateElement: {
        fontSize: theme.fontSizes.md
    },
    calendarHeaderRightArrow: {
        paddingRight: theme.space.md
    },
    calendarHeaderHamburgerIcon: {
        display: 'inline'

        , marginLeft: theme.space.md
        , '@media screen and (min-width: 768px)': {
            display: 'none'
        }
    }
    ,calendarHeaderHamburgerMenuItem: {
        backgroundColor: theme.colors.background
    }
    , calendarHeaderHamburgerMenuList: {
        backgroundColor: theme.colors.background
    }
    , calendarHeaderHamburger: {
        color: theme.colors.textMain
    }
    , calendarHeaderDateButtons: {
        color: theme.colors.textMain
        , backgroundColor: theme.colors.background
        , '&:hover': {
            backgroundColor: theme.colors.hoverBackground
        },
        '&:focus': {
            backgroundColor: theme.colors.background
            , outline: 'none'
        }
    },
    calendarDayBox: {
        width: '100%'
        , height: '50px'
        , bg: theme.colors.lightGray
        , display: 'flex'
        , alignItems: 'center'
        , justifyContent: 'center'
        , borderRadius: 'md'
        , cursor: 'pointer'
        , transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out'
        , '&:hover': {
            transform: 'scale(1.03)'
            , backgroundColor: theme.colors.textMain
            , color: theme.colors.background
        }
    },
    calendarCalendarContainer: {
        width: '100%'
    }
})


export default CalendarStyles