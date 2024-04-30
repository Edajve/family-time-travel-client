export const CreateRsvpStyles = (theme) => ({
    createRsvpContainer: {
        width: '100%',
        height: '100%',
        color: theme.colors.textMain
    },
    createRsvpFlexContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    createRsvpGridContainer: {
        width: '100%',
        height: '100%',
    },
    createRsvpFormContainer: {
        width: '50%',
        height: '100vh',
        padding: theme.space.lg,
    },
    createRsvpImageContainer: {
        width: '50%',
        height: '100vh',
    },
    mainText: {
        fontSize: theme.fontSizes.lg,
    },
    subText: {
        fontSize: theme.fontSizes.sm,
        marginTop: theme.space.md,
        marginBottom: theme.space.lg,
    },
    formHelperText: {
        fontSize: theme.fontSizes.xs,
        color: theme.colors.textMainDeemphasize,
    },
    formErrorMessage: {
        fontSize: theme.fontSizes.xs,
    },
    formLabel: {
        fontSize: theme.fontSizes.sm,
        marginTop: theme.space.lg,
    },
    createRsvpProgressContainer: {
        width: '100%',
        marginBottom: theme.space.lg,
        color: theme.colors.textMainDeemphasize,
        backgroundColor: theme.colors.background,
    },
    createRsvpNavButton: {
        backgroundColor: theme.colors.textMainDeemphasize,
        color: theme.colors.background,
        marginTop: theme.space.lg,
        marginLeft: '70%',
        minWidth: '100px',
        '&:hover': {
            backgroundColor: theme.colors.textMain,
            borderRadius: theme.space.sm,
        },
    },
    createRsvpNavButtonGroup: {
        paddingLeft: theme.space.lg,
        width: '90%',
    },
    formTag: {
        backgroundColor: theme.colors.textMainDeemphasize,
        color: theme.colors.background,
        marginLeft: theme.space.sm,
    },
    createRsvpFormStepTwoContainer: {
        width: '100%',
        height: '100%',
    },
    customTabs: {
        color: theme.colors.textMainDeemphasize
        , borderColor: theme.colors.textMainDeemphasize
    },
    customTabsSubmitButton: {
        backgroundColor: theme.colors.textMainDeemphasize
        , color: theme.colors.background
        , marginTop: theme.space.lg
        , minWidth: '100px'
        , width: '100%'
        , '&:hover': {
            backgroundColor: theme.colors.textMain
            , borderRadius: theme.space.sm
        },
    },
    emailTabPanel: {
        width: '100%'
        , height: '100%'
    }
    , emailTabFromSection: {
        width: '100%'
    }
    , emailTabToSection: {
        width: '100%'
        , overflowY: 'auto'
        , height: theme.space.lg
    }
    , emailTabTitleSection: {
        width: '100%'
    }
    , emailTabBodySection: {
        width: '100%'
        , height: '400px'
    }
    , emailTabFooterSection: {
        width: '100%'
    },
    emailTabInput: {
        width: '400px'
        , fontSize: theme.fontSizes.sm
    },
    emailTabInputWithAvatar: {
        width: '0px'
    },
    emailTabTextarea: {
        width: '100%'
        , height: '100%'
        , backgroundColor: theme.colors.textMainDeemphasize
    },
    phoneAssignmentContainer: {
        width: '70%'
        , height: '100%'
    },
    phoneAddAssignmentButton: {
        backgroundColor: theme.colors.textMainDeemphasize
        , color: theme.colors.background
        , minWidth: '100px'
        , display: 'inline-block'
        , marginTop: theme.space.lg
        , '&:hover': {
            backgroundColor: theme.colors.textMain
            , borderRadius: theme.space.sm
        }
    },
    phoneListOfPhoneAssignments: {
        width: '100%'
        , height: 'auto'
        , marginTop: theme.space.md
    },
    phoneAssignmentDisplayContainer: {
        width: '300px'
        , height: '200px'
        , border: '1px solid #c0ccc8e6'
        , marginTop: theme.space.lg
    },
    phoneAssignmentDisplayBox: {
        width: '100%'
        , height: '60px'
        , backgroundColor: theme.colors.textMainDeemphasize
        , color: theme.colors.background
        , justifyContent: 'space-between'
        , padding: theme.space.lg
        , overflowY: 'auto'
    }
    , phoneAssignmentDisplayName: {
        fontWeight: '700'
        , fontSize: theme.fontSizes.sm
    },
    phoneAssignmentDisplayNumber: {
        fontSize: theme.fontSizes.xs
        , paddingLeft: theme.space.sm
    },
    phoneAssignmentDeleteButton: {
        backgroundColor: 'transparent'
        , color: theme.colors.background
        , '&:hover': {
            // color: theme.colors.textMain
            backgroundColor: theme.colors.textMain
        }
    },
    phoneAssignmentArrowIcon: {
        marginTop: theme.space.lg
        , marginBottom: theme.space.md
    },
    disclaimer: {
        color: 'yellow'
        , fontSize: theme.fontSizes.xs
        , marginBottom: theme.space.md
    }
});

export default CreateRsvpStyles;
