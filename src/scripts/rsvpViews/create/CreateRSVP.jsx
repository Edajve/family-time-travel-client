import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    Select,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    Stepper,
    StepSeparator,
    StepStatus,
    StepTitle,
    Tag,
    TagCloseButton,
    TagLabel,
    Text,
    Textarea,
    useTheme,
    VStack
} from '@chakra-ui/react';
import CreateRsvpStyles from "../../../styles/CreateRsvpStyles.js";
import BackHeader from "../../navigation/BackHeader.jsx";
import React, {useEffect, useState} from "react";

const CreateRSVP = () => {
    const theme = useTheme();
    const styles = CreateRsvpStyles(theme);
    const [activeStep, setActiveStep] = useState(1);
    const steps = [
        {title: 'First', description: 'Setting Up RSVP'},
        {title: 'Second', description: 'Notification Method'},
        {title: 'Third', description: 'Confirm'},
        {title: 'Fourth', description: 'Done!'},
    ]
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        organizer: '',
        date: '',
        startTime: '',
        endTime: '',
        iconColor: '',
        category: '',
        links: [],
        notes: '',
        tags: [],
        guests: [],
    });


    const handleNextStep = () => {
        setActiveStep(prevStep => prevStep + 1);
    };

    const handlePrevStep = () => {
        setActiveStep(prevStep => prevStep - 1);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleInputKeyDown = (e, type) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const inputValue = e.target.value.trim();
            if (inputValue !== '') {
                if (type === 'tags') {
                    setFormData(prevState => ({
                        ...prevState,
                        tags: [...prevState.tags, inputValue],
                        tagsInput: ''
                    }));
                } else if (type === 'guests') {
                    setFormData(prevState => ({
                        ...prevState,
                        guests: [...prevState.guests, inputValue],
                        guestsInput: ''
                    }));
                } else if (type === 'links') {
                    setFormData(prevState => ({
                        ...prevState,
                        links: [...prevState.links, inputValue],
                        linksInput: ''
                    }));
                }
            }
        }
    };

    const handleTagRemove = (tagToRemove) => {
        setFormData(prevState => ({
            ...prevState,
            tags: prevState.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const handleGuestRemove = (guestToRemove) => {
        setFormData(prevState => ({
            ...prevState,
            guests: prevState.guests.filter(guest => guest !== guestToRemove)
        }));
    };

    const handleLinkRemove = (linkToRemove) => {
        setFormData(prevState => ({
            ...prevState,
            links: prevState.links.filter(link => link !== linkToRemove)
        }));
    };

    const isEmptyField = Object.values(formData).some(value => {
        if (typeof value === 'string') {
            return value.trim() === '';
        } else {
            return false; // Skip non-string values
        }
    });

    const onStepOne = activeStep === 1
    const onStepTwo = activeStep === 2

    useEffect(() => {
        // console.log(formData);
    }, [formData]);

    return (
        <Box className='createRsvpContainer' gap={0} sx={styles.createRsvpContainer}>
            <BackHeader linkTo='/rsvp'/>
            <Box className='createRsvpFlexContainer' sx={styles.createRsvpFlexContainer}>
                <VStack className='createRsvpFormContainer' sx={styles.createRsvpFormContainer}>

                    <Box size='sm' className='createRsvpProgressContainer'
                         sx={styles.createRsvpProgressContainer}
                    >
                        <Stepper
                            className='createRsvpStepper'
                            sx={styles.createRsvpStepper}
                            index={activeStep}
                        >
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <StepIndicator>
                                        <StepStatus
                                            complete={<StepIcon/>}
                                            incomplete={<StepNumber/>}
                                            active={<StepNumber/>}
                                        />
                                    </StepIndicator>

                                    <Box flexShrink='0'>
                                        <StepTitle>{step.title}</StepTitle>
                                        <StepDescription>{step.description}</StepDescription>
                                    </Box>

                                    <StepSeparator/>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>

                    <Text
                        className='mainText'
                        sx={styles.mainText}
                    >
                        Create RSVP
                    </Text>
                    <Text
                        className='subText'
                        sx={styles.subText}
                    >
                        Welcome to our family RSVP form! With this handy tool,
                        you can easily set up events and send invitations to your family and friends,
                        whether by email or text message. Simply fill out the details of your event,
                        including the title, description, location, date, start and end times,
                        and any additional information you would like to include. Once your event is set up,
                        you can easily manage your guest list and track responses.
                        Let's get started and make planning your next gathering a breeze!
                    </Text>

                    {onStepOne && (
                        <FormControl isInvalid={isEmptyField} className='formControl' sx={styles.formControl}>
                            <FormLabel className='formLabel' sx={styles.formLabel}>Title*</FormLabel>
                            <Input size='sm' className='input' type='text' name='title' value={formData.title}
                                   onChange={handleInputChange} sx={styles.input}/>
                            {!isEmptyField ? (
                                <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                    Enter a catchy title for your event.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not
                                    leave
                                    blank</FormErrorMessage>
                            )}

                            <FormLabel className='formLabel' sx={styles.formLabel}>Description*</FormLabel>
                            <Textarea size='sm' className='input' name='description' value={formData.description}
                                      onChange={handleInputChange} sx={styles.input}/>
                            {!isEmptyField ? (
                                <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                    Briefly describe your event.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not
                                    leave
                                    blank</FormErrorMessage>
                            )}

                            <FormLabel className='formLabel' sx={styles.formLabel}>Location*</FormLabel>
                            <Input size='sm' className='input' type='text' name='location' value={formData.location}
                                   onChange={handleInputChange} sx={styles.input}/>
                            {!isEmptyField ? (
                                <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                    Specify the venue or location of your event.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not
                                    leave
                                    blank</FormErrorMessage>
                            )}

                            <FormLabel className='formLabel' sx={styles.formLabel}>Organizer</FormLabel>
                            <Input size='sm' className='input' type='text' name='organizer' value={formData.organizer}
                                   onChange={handleInputChange} sx={styles.input}/>
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Enter the name of the event organizer.
                            </FormHelperText>

                            <FormLabel className='formLabel' sx={styles.formLabel}>Date*</FormLabel>
                            <Input size='sm' className='input' type='date' name='date' value={formData.date}
                                   onChange={handleInputChange} sx={styles.input}/>
                            {!isEmptyField ? (
                                <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                    Select the date of your event.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not
                                    leave
                                    blank</FormErrorMessage>
                            )}

                            <FormLabel className='formLabel' sx={styles.formLabel}>Start Time*</FormLabel>
                            <Input size='sm' className='input' type='time' name='startTime' value={formData.startTime}
                                   onChange={handleInputChange} sx={styles.input}/>
                            {!isEmptyField ? (
                                <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                    Select the start time and time of your event.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not
                                    leave
                                    blank</FormErrorMessage>
                            )}

                            <FormLabel className='formLabel' sx={styles.formLabel}>End Time*</FormLabel>
                            <Input size='sm' className='input' type='time' name='endTime' value={formData.endTime}
                                   onChange={handleInputChange} sx={styles.input}/>
                            {!isEmptyField ? (
                                <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                    Select the end time and time of your event.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not
                                    leave
                                    blank</FormErrorMessage>
                            )}

                            <FormLabel className='formLabel' sx={styles.formLabel}>Add Tags to categorize your event(s)
                                for
                                future searching</FormLabel>
                            <Input
                                className='input'
                                type='text'
                                size='sm'
                                value={formData.tagsInput}
                                name="tagsInput"
                                onChange={handleInputChange}
                                onKeyDown={(e) => handleInputKeyDown(e, 'tags')} // Pass 'tags' as the type
                            />
                            {formData.tags.map(tag => (
                                <Tag className='formTag' sx={styles.formTag} key={tag} variant="solid"
                                     colorScheme="teal" className='tag'>
                                    <TagLabel>{tag}</TagLabel>
                                    <TagCloseButton fontSize='sm' onClick={() => handleTagRemove(tag)}/>
                                </Tag>
                            ))}
                            {!formData.tags.length && (
                                <FormHelperText className='formHelperText' sx={styles.formHelperText}>Optionally, add
                                    tags
                                    to categorize your event for future searching.</FormHelperText>
                            )}

                            <FormLabel className='formLabel' sx={styles.formLabel}>Guests Who Are Attending</FormLabel>
                            <Input
                                className='input'
                                type='text'
                                size='sm'
                                value={formData.guestsInput}
                                name="guestsInput"
                                onChange={handleInputChange}
                                onKeyDown={(e) => handleInputKeyDown(e, 'guests')} // Pass 'guests' as the type
                            />
                            {formData.guests.map(guest => (
                                <Tag className='formTag' sx={styles.formTag} key={guest} variant="solid"
                                     colorScheme="teal" className='tag'>
                                    <TagLabel>{guest}</TagLabel>
                                    <TagCloseButton fontSize='sm' onClick={() => handleGuestRemove(guest)}/>
                                </Tag>
                            ))}
                            {!formData.guests.length && (
                                <FormHelperText className='formHelperText' sx={styles.formHelperText}>Type and press
                                    Enter
                                    to add a guest</FormHelperText>
                            )}

                            <FormLabel className='formLabel' sx={styles.formLabel}>Icon Color</FormLabel>
                            <Select
                                size='sm'
                                className='input'
                                name='iconColor'
                                value={formData.iconColor}
                                onChange={handleInputChange}
                            >
                                <option value="">Select a Color</option>
                                <option value="red">Red</option>
                                <option value="red">Black</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                                <option value="yellow">Yellow</option>
                                <option value="yellow">Orange</option>
                                <option value="yellow">Purple</option>
                                <option value="yellow">Pink</option>
                                <option value="yellow">White</option>
                            </Select>
                            <FormHelperText className='formHelperText'>Choose an icon color to represent your event.
                                Selected: {formData.iconColor}</FormHelperText>

                            <FormLabel className='formLabel' sx={styles.formLabel}>Category*</FormLabel>
                            <Select
                                size='sm'
                                className='input'
                                name='category'
                                value={formData.category}
                                onChange={handleInputChange}
                            >
                                <option value="">Select the Category of Event</option>
                                <option value="social">Social Events</option>
                                <option value="professional">Professional Events</option>
                                <option value="educational">Educational Events</option>
                                <option value="cultural">Cultural Events</option>
                                <option value="sports">Sports Events</option>
                                <option value="community">Community Events</option>
                                <option value="family">Family Events</option>
                                <option value="wellness">Wellness Events</option>
                                <option value="tech">Tech Events</option>
                                <option value="arts_crafts">Arts and Crafts Events</option>
                            </Select>
                            {!formData.category ? (
                                <FormErrorMessage className='formErrorMessage'>Can not leave blank</FormErrorMessage>
                            ) : (
                                <FormHelperText className='formHelperText'>Select a category to classify your event.
                                    Selected: {formData.category}</FormHelperText>
                            )}

                            <FormLabel className='formLabel' sx={styles.formLabel}>Links/Resources</FormLabel>
                            <Input
                                className='input'
                                type='text'
                                size='sm'
                                value={formData.linksInput}
                                name="linksInput"
                                onChange={handleInputChange}
                                onKeyDown={(e) => handleInputKeyDown(e, 'links')} // Pass 'links' as the type
                            />
                            {formData.links.map(link => (
                                <Tag className='formTag' sx={styles.formTag} key={link} variant="solid"
                                     colorScheme="teal" className='tag'>
                                    <TagLabel>{link}</TagLabel>
                                    <TagCloseButton fontSize='sm' onClick={() => handleLinkRemove(link)}/>
                                </Tag>
                            ))}

                            <FormLabel className='formLabel' sx={styles.formLabel}>Notes</FormLabel>
                            <Textarea size='sm' className='input' name='notes' value={formData.notes}
                                      onChange={handleInputChange} sx={styles.input}/>
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Add any additional notes or information about your event.
                            </FormHelperText>

                        </FormControl>
                    )}

                    {onStepTwo && (
                        <Text>Step two</Text>
                    )}

                    {activeStep <= steps.length - 1 && (
                        <ButtonGroup className='createRsvpNavButtonGroup' sx={styles.createRsvpNavButtonGroup}>
                            <Button
                                className='createRsvpNavButton' sx={styles.createRsvpNavButton}
                                onClick={handlePrevStep} className='nextButton'
                                colorScheme='teal'
                                size='sm'>
                                Back
                            </Button>
                            <Button
                                className='createRsvpNavButton' sx={styles.createRsvpNavButton}
                                onClick={handleNextStep}
                                colorScheme='teal'
                                size='sm'>
                                Next
                            </Button>
                        </ButtonGroup>
                    )}
                </VStack>
                <VStack className='createRsvpImageContainer' sx={styles.createRsvpImageContainer}>
                    <Text>Cant Put down the cup</Text>
                </VStack>
            </Box>
        </Box>
    )
}

export default CreateRSVP;
