import NoteCardStyles from '../../styles/NoteCardStyles';
import { useTheme, Box, Image, Text } from '@chakra-ui/react';
import timeCapsule from '../../assets/public/images/timeCapsule.png';

const NoteCard = () => {
    const theme = useTheme();
    const styles = NoteCardStyles(theme);

    return (
        <Box className='homeContainer' sx={styles.homeContainer}>
            <Box className='noteCardDescriptionContainer' sx={styles.noteCardDescriptionContainer}>
                <Text className='noteCardTitleText' sx={styles.noteCardTitleText}>Family Time Portal</Text>
                <Text className='noteCardDescriptionText' sx={styles.noteCardDescriptionText}>
                    As each year draws to a close, our family gathers to pen our achievements,
                    aspirations, cherished memories, and defining moments. This sacred ritual binds us,
                    capturing the essence of the year as it slips into the annals of our history.
                </Text>
            </Box>
            <Box className='noteCardImageAndText' sx={styles.noteCardImageAndText}>
                <Box className='noteCardPictureContainer' sx={styles.noteCardPictureContainer}>
                    <Image className='noteCardPictureTag' sx={styles.noteCardPictureTag} src={timeCapsule} />
                </Box>
                <Box className='noteCardPictureTextContainer' sx={styles.noteCardPictureTextContainer}>
                    <Text className='noteCardPictureTextElement' sx={styles.noteCardPictureTextElement}>
                        "The real moment has disappeared but you will always have the memories to remind you."
                    </Text>
                    <Text className='noteCardQuoteAuthor' sx={styles.noteCardQuoteAuthor}>-Ansel Adams</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default NoteCard;
