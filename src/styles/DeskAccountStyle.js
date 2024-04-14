import { Button } from "@chakra-ui/react"

export const DeskAccountStyle = (theme) => ({
    deskAccountContainer: {
        width: '100%'
        , height: '100%'
        , display: 'flex'
        , flexDirection: 'column'
        , padding: theme.space.md
        , paddingTop: theme.space.lg
        , overflow: 'auto'
        , color: theme.colors.textMain
    }
    , deskAccountDivider: {
        width: '100%'
    }
    , deskAccountTitleContainer: {
        width: '100%'
        , height: '90px'
        , paddingTop: theme.space.lg
    }
    , deskAccountTitleMainText: {
        fontSize: theme.fontSizes.sm
        , fontWeight: '600'
    }
    , deskAccountTitleSubText: {
        fontSize: theme.fontSizes.xs
    }
    , deskAccountProfileContainer: {
        display: 'flex'
        , justifyContent: 'space-between'
        , width: '100%'
    }
    , deskAccountProfilePicParentContainer: {
        display: 'flex'
        , paddingTop: theme.space.sm
        , width: 'auto'
    }
    , deskAccountProfilePicText: {
        fontSize: theme.fontSizes.sm
        , fontWeight: '600'
    }
    , deskAccountProfilePicTypeOfFileText: {
        fontSize: theme.fontSizes.xs
    }
    , deskAccountProfilePicTextContainer: {
        marginTop: theme.space.md
    }
    , deskAccountProfilePicOperationButtonsContainer: {
        width: 'auto'
        , marginTop: theme.space.lg
    }
    , deskAccountProfilePicContainer: {
        width: 'auto'
        , display: 'flex'
        , justifyContent: 'center'
        , lignItems: 'center'
        , marginRight: theme.space.md
    }
    , deskAccountProfilePicOperationUploadButton: {
        marginRight: theme.space.sm
    }
    , deskAccountFullNameContainer: {
        width: '100%'
        , display: 'flex'
        , flexDirection: 'column'
    }
    , deskAccountFirstNameInput: {

    }
    , deskAccountLastNameInput: {

    }
    , deskAccountFullNameTextContainer: {
        marginBottom: theme.space.sm
        , marginTop: theme.space.md
    }
    , deskAccountFullNameText: {
        fontWeight: '600'
    }
    , deskAccountFullNameInputContainer: {
        display: 'flex'
        , width: '100%'
        , justifyContent: 'space-between'
        , marginBottom: theme.space.md
    }
    , deskAccountNameInputGroup: {
        width: '48%'
    }
    , deskAccountNameInputTextElement: {
        fontSize: theme.fontSizes.xs
        , paddingBottom: theme.space.sm
    }
    , deskAccountEmailContainer: {
        width: '100%'
    }
    , deskAccountEmailMainText: {
        fontSize: theme.fontSizes.sm
        , fontWeight: '600'
    }
    , deskAccountEmailSubText: {
        fontSize: theme.fontSizes.xs
        , paddingBottom: theme.space.sm
        , marginBottom: theme.space.sm
    }
    , deskAccountEmailInputButtonGroup: {
        display: 'flex'
        , justifyContent: 'space-between'
        , marginBottom: theme.space.md
    }
    , deskAccountEmailInputElement: {
        width: '250px'

    }
    , deskAccountProfileAnalayticsContainer: {
        display: 'flex'
        , justifyContent: 'space-around'
        , width: '100%'
        , marginTop: theme.space.md
    }
    , deskAccountEmailButtonElement: {
        backgroundColor: theme.colors.secondary
    }
    , deskAccountProfileAnalayticsDataGroupText: {
        fontSize: theme.fontSizes.sm
        , fontWeight: '600'
    }
    , deskAccountProfileAnalayticsDataGroupDivider: {
        marginTop: theme.space.xs
        , marginBottom: theme.space.xs
    }
    , deskAccountProfileAnalayticsDataGroupSubText: {
        fontSize: theme.fontSizes.xs
    }
    , deskAccountProfilePicOperationDeleteButton: {
        backgroundColor: theme.colors.textMain
    }
    , deskAccountProfilePicOperationUploadButton: {
        backgroundColor: theme.colors.secondary
        , marginRight: theme.space.sm
    }
})

export default DeskAccountStyle