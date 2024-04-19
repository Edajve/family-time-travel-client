export const CalendarStyles = (theme) => ({
    calendarContainer: {
        width: '100%',
        height: '675px',
        color: theme.colors.textMain,
        padding: theme.space.sm,
        paddingLeft: theme.space.lg,
        paddingRight: theme.space.lg
    },
    calendarHeader: {
        width: '100%',
        height: '10%',
        justifyContent: 'space-between',
        marginBottom: theme.space.md
    },
    calendarHeaderDateElement: {
        fontSize: theme.fontSizes.md
    },
    calendarHeaderButtonsContainer: {},
    calendarHeaderDate: {},
    calendarHeaderLeftArrow: {},
    calendarHeaderRightArrow: {
        paddingRight: theme.space.md
    },
    calendarHeaderHamburgerIcon: {
        marginLeft: theme.space.md
    },
    calendarHeaderDateButtons: {
        color: theme.colors.textMain,
        backgroundColor: theme.colors.background,
        '&:hover': {
            backgroundColor: theme.colors.hoverBackground
        },
        '&:focus': {
            backgroundColor: theme.colors.background,
            outline: 'none'
        }
    },
    calendarDayBox: {
        width: '100%',
        height: '50px',
        bg: theme.colors.lightGray,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'md',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.03)',
            backgroundColor: theme.colors.textMain,
            color: theme.colors.background
        }
    },
    calendarCalendarContainer: {
        width: '100%'
    }
})


export default CalendarStyles