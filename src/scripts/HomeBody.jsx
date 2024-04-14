import React, { useState } from 'react'
import {
    Box
    , useTheme
    , Accordion
    , AccordionItem
    , AccordionButton
    , AccordionPanel
    , AccordionIcon
    , Text
    , Card
    , CardHeader
    , CardBody
    , Heading
    , Stack
    , StackDivider
    , FormControl
    , FormLabel
    , FormErrorMessage
    , FormHelperText
    , Input
    , Select
    , Button
} from '@chakra-ui/react'
import HomeBodyStyle from '../styles/HomeBodyStyle'

export const HomeBody = () => {
    const theme = useTheme()
    const styles = HomeBodyStyle(theme)
    const [noteInput, setNoteInput] = useState({
        title: ''
        , emotion: ''
        , note: ''
    })

    const onChangeNoteFormInputs = (e) => {
        const { id, value: inputText } = e.target
        let fieldToUpdate = ''

        switch (id) {
            case 'note-title':
                fieldToUpdate = 'title'
                break
            case 'note-emotion':
                fieldToUpdate = 'emotion'
                break
            case 'note-note':
                fieldToUpdate = 'note'
                break
            default:
                console.log('No matching id for input')
                return
        }

        if (fieldToUpdate) {
            const newNoteObject = { ...noteInput, [fieldToUpdate]: inputText }
            setNoteInput(newNoteObject)
        }
    }

    const submitNote = () => {
        console.log('submit note', noteInput)
    }

    const isErrorForNoteTitle = noteInput.title.trim() === ''
    const isErrorForNote = noteInput.note.trim() === ''
    const isErrorForEmotion = noteInput.emotion.trim() === 'Select an emotion..'

    return (
        <Box sx={styles.homeBodyContainer} className='homeBodyContainer'>
            <Box sx={styles.homeBodyYearPickerContainer} className='homeBodyYearPickerContainer'>
                <Accordion allowToggle>
                    {['2018', '2019', '2020', '2021', '2022', '2023'].map(year => (
                        <AccordionItem key={year} className='bodyYearContainer' sx={styles.bodyYearContainer}>
                            <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        {year}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text as='span' className='bodyYearText' sx={styles.bodyYearText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <Box sx={styles.homeBodyNotesContainer} className='homeBodyNotesContainer'>
                <Card sx={styles.homeBodyNotesCardContainer} className='homeBodyNotesCardContainer'>
                    <CardHeader>
                        <Heading sx={styles.homeBodyNotesCardTitle} className='homeBodyNotesCardTitle' size='md'>Add a note</Heading>
                    </CardHeader>
                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Note title
                                </Heading>
                                <FormControl isInvalid={isErrorForNoteTitle}>
                                    <FormLabel htmlFor='note-title'></FormLabel>
                                    <Input
                                        id='note-title'
                                        value={noteInput.title}
                                        onChange={onChangeNoteFormInputs} />
                                    {!isErrorForNoteTitle ? (
                                        <FormHelperText>
                                            Enter the title of your note
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Title is required</FormErrorMessage>
                                    )}
                                </FormControl>
                            </Box>
                            <Box>
                                <Heading
                                    className='bodyNoteTitle'
                                    sx={styles.bodyNoteTitle}
                                    size='xs' textTransform='uppercase'>
                                    note
                                </Heading>
                                <FormControl isInvalid={isErrorForNote}>
                                    <Input
                                        className='bodyNoteInput'
                                        sx={styles.bodyNoteInput}
                                        id='note-note' value={noteInput.note} onChange={onChangeNoteFormInputs} />
                                    {!isErrorForNote ? (
                                        <FormHelperText>
                                            Enter your time capsule note, make sure it's thoughtful!
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Note is required</FormErrorMessage>
                                    )}
                                </FormControl>
                            </Box>
                            <Box>
                                <Heading
                                    className='bodyEmotionTitle'
                                    sx={styles.bodyEmotionTitle}
                                    size='xs' textTransform='uppercase'>
                                    Emotion
                                </Heading>
                                <FormControl isInvalid={isErrorForEmotion}>
                                    <Select
                                        id='note-emotion'
                                        placeholder='Select an emotion..'
                                        className='bodyEmotionSelect'
                                        sx={styles.bodyEmotionSelect}
                                        value={noteInput.emotion}
                                        onChange={onChangeNoteFormInputs}
                                    >
                                        <option value='happy'>Happy</option>
                                        <option value='sad'>Sad</option>
                                        <option value='excited'>Excited</option>
                                        <option value='anxious'>Anxious</option>
                                        <option value='content'>Content</option>
                                        <option value='bored'>Bored</option>
                                        <option value='hopeful'>Hopeful</option>
                                        <option value='frustrated'>Frustrated</option>
                                        <option value='proud'>Proud</option>
                                        <option value='angry'>Angry</option>
                                        <option value='confused'>Confused</option>
                                        <option value='disappointed'>Disappointed</option>
                                    </Select>
                                    {!isErrorForEmotion ? (
                                        <FormHelperText>
                                            Select how you're feeling about this note
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Emotion is required</FormErrorMessage>
                                    )}
                                </FormControl>
                            </Box>
                            <Button
                                className='bodySubmitButton'
                                variant='outline'
                                sx={styles.bodySubmitButton}
                                onClick={() => submitNote()}>
                                Submit Note
                            </Button>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </Box>
    )
}

export default HomeBody
