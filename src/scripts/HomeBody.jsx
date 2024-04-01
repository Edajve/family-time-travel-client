import React, { useState } from 'react'
import {
    Box,
    useTheme,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Card,
    CardHeader,
    CardBody,
    Heading,
    Stack,
    StackDivider,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import HomeBodyStyle from '../styles/HomeBodyStyle'

export const HomeBody = () => {
    const theme = useTheme();
    const styles = HomeBodyStyle(theme);
    const [noteInput, setNoteInput] = useState({
        title: ''
        , emotion: ''
        , note: ''
    })

    const handleInputChange = (e) => {
        setNoteInput(e.target.value)
        const newNote = { ...noteInput, }
    }

    const onChangeNoteFormInputs = (e) => {
        const { id, value: inputText } = e.target; // Destructure for easier access
        let fieldToUpdate = '';

        switch (id) {
            case 'note-title':
                fieldToUpdate = 'title';
                break;
            case 'note-emotion':
                fieldToUpdate = 'emotion';
                break;
            case 'note-note': // Assuming 'note-note' is the id for the 'note' field for clarity
                fieldToUpdate = 'note';
                break;
            default:
                console.log('No matching id for input');
                return;
        }

        if (fieldToUpdate) {
            const newNoteObject = { ...noteInput, [fieldToUpdate]: inputText };
            setNoteInput(newNoteObject);
        }
    };

    const isErrorForEmail = noteInput.title.trim() === ''
    const isErrorForEmotion = noteInput.emotion.trim() === 'Select an emotion..'
    const isErrorForNote = noteInput.note.trim() === ''

    return (
        <Box sx={styles.homeBodyContainer} className='homeBodyContainer'>
            <Box sx={styles.homeBodyYearPickerContainer} className='homeBodyYearPickerContainer'>
                <Accordion allowToggle>
                    <AccordionItem className='bodyYearContainer' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2018
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='bodyYearContainer' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2019
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='bodyYearContainer' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2020
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='bodyYearContainer' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2021
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='bodyYearContainer' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2022
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='bodyYearContainer lastYear' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2023
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
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
                                <FormControl isInvalid={isErrorForEmail}>
                                    <FormLabel htmlFor='note-title'></FormLabel>
                                    <Input
                                        id='note-title'
                                        value={noteInput.title}
                                        onChange={onChangeNoteFormInputs} />
                                    {!isErrorForEmail ? (
                                        <FormHelperText>
                                            Enter the title of your note.
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Title is required</FormErrorMessage>
                                    )}
                                </FormControl>

                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    note
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    Check out the overview of your clients.
                                </Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Emotion
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    See a detailed analysis of all your business clients.
                                </Text>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </Box>
    )
}

export default HomeBody