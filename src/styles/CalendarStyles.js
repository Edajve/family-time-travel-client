export const CalendarStyles = (theme) => ({
    calendarMobileContainer: {
        width: '100%'
        , height: '100%'
        , color: theme.colors.textMain
        , '@media screen and (min-width: 768px)': {
            marginRight: theme.space.sm
        }
    }
    , calendarDesktopAsideContainer: {
        width: '250px'
        , height: '100%'
        , display: 'none'
        , '@media screen and (min-width: 768px)': {
            display: 'block'
            , marginLeft: theme.space.md
            , borderRight: '1px solid #c0ccc8e6'
        }
    }
    , calendarMobileCalendarContainer: {
        width: '100%'
        , '@media screen and (min-width: 768px)': {
            display: 'none'
        }
    }
    , calendarDesktopAndMobileContainer: {
        width: '100%'
        , height: '100%'
    }
    , calendarHeader: {
        width: '100%'
        , height: '10%'
        , justifyContent: 'space-between'
        , marginBottom: theme.space.lg
        , paddingLeft: theme.space.sm
        , paddingRight: theme.space.sm
        , '@media screen and (min-width: 768px)': {
            marginBottom: '15px'
        }
    }
    , calendarDivider: {
        '@media screen and (min-width: 768px)': {
            display: 'none'
        }
    }
    , calendarHeaderDateElement: {
        fontSize: theme.fontSizes.md
        , '@media screen and (min-width: 768px)': {
            fontSize: theme.fontSizes.xs
            , color: theme.colors.textMainDeemphasize
        }
    }
    , calendarHeaderRightArrow: {
        paddingRight: theme.space.md
    }
    , calendarHeaderHamburgerIcon: {
        marginLeft: theme.space.md
    }
    , calendarHeaderHamburgerMenuItem: {
        backgroundColor: theme.colors.background
        , color: theme.colors.textMainDeemphasize
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
            backgroundColor: theme.colors.background
        }
        , '&:focus': {
            backgroundColor: theme.colors.background
            , outline: 'none'
        }
    },
    calendarDayBox: {
        width: '100%'
        , height: '50px'
        , bg: theme.colors.background
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
    }
    , calendarDayBoxEmpty: {
        width: '100%'
        , height: '50px'
        , bg: theme.colors.background
    }
    , calendarAsideNewEventButton: {
        color: theme.colors.textMain
        , marginTop: theme.space.lg
        , border: 'none'
        , marginBottom: theme.space.lg
    }
    , calendarAsideNewEventButtonMenuButton: {
        color: theme.colors.textMain
        , backgroundColor: theme.colors.background
        , borderColor: theme.colors.textMainDeemphasize
    }
    , calendarAsideNewEventButtonMenuItem: {
        color: theme.colors.textMain, backgroundColor: theme.colors.background
    }
    , calendarAsideNewEventButtonMenuList: {
        color: theme.colors.textMain
        , backgroundColor: theme.colors.background
    },
    calendarAsideAccordionTitle: {
        fontSize: theme.fontSizes.sm
        , color: theme.colors.textMain
    },
    calendarAsideFilterContainer: {
        width: '100%'
        , height: 'auto'
    },
    calendarAsideFilterInput: {
        width: '80%'
        , backgroundColor: theme.colors.background
        , color: theme.colors.textMain
        , borderColor: theme.colors.textMainDeemphasize
    },
    calendarAsideNewEventText: {
        color: theme.colors.textMainDeemphasize
    }
})


export default CalendarStyles