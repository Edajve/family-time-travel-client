export const MobileCalendarTrackerStyles = (theme) => ({
    calendarMobileTrackerContainer: {
        width: '100%'
        , minWidth: '320px'
        , height: '100%'
        , padding: theme.space.md
    }
    , calendarMobileTrackerDateProjector: {
        fontSize: theme.fontSizes.md
        , fontWeight: '700'
        , marginRight: theme.space.sm
    }
    , calendarMobileTrackerDate: {
        fontSize: theme.fontSizes.xs
    }
    , calendarMobileTrackerTitleContainer: {
        width: '100%'
        , paddingTop: theme.space.md
        , alignSelf: 'center'
        , marginBottom: theme.space.md
    }
    , calendarMobileTrackerWrapper: {
        width: '100%'
        , height: '100%'
    }
    , calendarMobileTrackerEventsTodayContainer: {
        width: '100%'
        , height: '100%'
        , overflowY: 'auto'
    }
    , calendarMobileTrackerEventsTodayTimeContainer: {
        marginRight: theme.space.md
        , width: '12%'
        , marginBottom: theme.space.xs
    }
    , calendarMobileTrackerEventListContainer: {
        width: '100%'
        , color: theme.colors.textMainDeemphasize
        , '&:hover': {
            transform: 'scale(1.01)'
            , color: theme.colors.textMain
            , cursor: 'pointer'
        }
    }
    , calendarMobileTrackerEventsIconContainer: {
        width: '8px'
        , height: '8px'
        , borderRadius: '100%'
        , backgroundColor: 'pink'
        , marginRight: theme.space.sm
    }
    , calendarMobileTrackerEventsDescriptionText: {}
})

export default MobileCalendarTrackerStyles