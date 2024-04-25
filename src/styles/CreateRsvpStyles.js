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
        marginLeft: '80%',
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
        color: theme.colors.textMainDeemphasize,
    },
    customTabsSubmitButton: {
        backgroundColor: theme.colors.textMainDeemphasize,
        color: theme.colors.background,
        marginTop: theme.space.lg,
        minWidth: '100px',
        width: '100%',
        '&:hover': {
            backgroundColor: theme.colors.textMain,
            borderRadius: theme.space.sm,
        },
    },
    emailTabPanel: {
        width: '100%',
        height: '100%',
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
    emailTabInputWithAvarar: {
        width: '0px'
    }
});

export default CreateRsvpStyles;
