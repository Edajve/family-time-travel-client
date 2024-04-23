import {
    Box, Button,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    Select,
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
import {useEffect, useState} from "react";

const CreateRSVP = () => {
    const theme = useTheme();
    const styles = CreateRsvpStyles(theme);
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
        links: '',
        notes: '',
        tags: [],
        guests: [],
    });

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleTagsChange = (tags) => {
        setFormData(prevState => ({
            ...prevState,
            tags: tags,
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
                        tagsInput: '' // Clear the input field after adding the tag
                    }));
                } else if (type === 'guests') {
                    setFormData(prevState => ({
                        ...prevState,
                        guests: [...prevState.guests, inputValue],
                        guestsInput: '' // Clear the input field after adding the guest
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

    const isEmptyField = Object.values(formData).some(value => {
        if (typeof value === 'string') {
            return value.trim() === '';
        } else {
            return false; // Skip non-string values
        }
    });

    return (
        <Box className='createRsvpContainer' gap={0} sx={styles.createRsvpContainer}>
            <BackHeader linkTo='rsvp'/>
            <Box className='createRsvpFlexContainer' gap={0} sx={styles.createRsvpFlexContainer}>
                <VStack className='createRsvpFormContainer' gap={0} sx={styles.createRsvpFormContainer}>
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
                    <FormControl isInvalid={isEmptyField} className='formControl' sx={styles.formControl}>
                        <FormLabel className='formLabel' sx={styles.formLabel}>Title*</FormLabel>
                        <Input size='sm' className='input' type='text' name='title' value={formData.title}
                               onChange={handleInputChange} sx={styles.input}/>
                        {!isEmptyField ? (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Enter a catchy title for your event.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
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
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
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
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
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
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
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
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
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
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
                                blank</FormErrorMessage>
                        )}

                        <FormLabel className='formLabel' sx={styles.formLabel}>Add Tags to categorize your event(s) for
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
                            <Tag key={tag} variant="solid" colorScheme="teal" className='tag'>
                                <TagLabel>{tag}</TagLabel>
                                <TagCloseButton onClick={() => handleTagRemove(tag)}/>
                            </Tag>
                        ))}
                        {!formData.tags.length && (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>Optionally, add tags
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
                            <Tag key={guest} variant="solid" colorScheme="teal" className='tag'>
                                <TagLabel>{guest}</TagLabel>
                                <TagCloseButton onClick={() => handleGuestRemove(guest)}/>
                            </Tag>
                        ))}
                        {!formData.guests.length && (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>Type and press Enter
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
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
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
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            {/* Add more options as needed */}
                        </Select>
                        {!formData.category ? (
                            <FormErrorMessage className='formErrorMessage'>Can not leave blank</FormErrorMessage>
                        ) : (
                            <FormHelperText className='formHelperText'>Select a category to classify your event.
                                Selected: {formData.category}</FormHelperText>
                        )}

                        <FormLabel className='formLabel' sx={styles.formLabel}>Links</FormLabel>
                        <Input size='sm' className='input' type='link' name='links' value={formData.links}
                               onChange={handleInputChange} sx={styles.input}/>
                        <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                            Add any relevant links related to your event.
                        </FormHelperText>

                        <FormLabel className='formLabel' sx={styles.formLabel}>Notes</FormLabel>
                        <Textarea size='sm' className='input' name='notes' value={formData.notes}
                                  onChange={handleInputChange} sx={styles.input}/>
                        <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                            Add any additional notes or information about your event.
                        </FormHelperText>
                        <Button className='nextButton' sx={styles.nextButton} colorScheme='teal' size='sm'>
                            Next
                        </Button>
                    </FormControl>
                </VStack>
                <VStack className='createRsvpImageContainer' gap={0} sx={styles.createRsvpImageContainer}>
                    <Text>Cant Put down the cup</Text>
                </VStack>
            </Box>
        </Box>
    );
}

export default CreateRSVP;
