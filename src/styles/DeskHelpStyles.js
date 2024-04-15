export const DeskHelpStyles = (theme) => ({
    helpContainer: {
        height: '100%'
        , width: '100%'
        , position: 'relative',
    }
    , helpCard: {
        height: '400px'
        , width: '400px'
        , position: 'absolute'
        , right: '15px'
        , top: '47%'
        , backgroundColor: theme.colors.secondary
        , transform: 'translateY(-50%)'
        , border: '1px solid #c0ccc8e6'
        , borderRadius: '20px 120px 20px 20px'
    }
    
})

export default DeskHelpStyles