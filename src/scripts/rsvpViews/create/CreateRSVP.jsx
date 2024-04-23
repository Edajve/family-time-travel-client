import {
    Box,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    Select,
    Text,
    Textarea,
    useTheme,
    VStack,
} from '@chakra-ui/react';
import CreateRsvpStyles from "../../../styles/CreateRsvpStyles.js";
import BackHeader from "../../navigation/BackHeader.jsx";
import {useState} from "react";
import WhosComingTags from "./WhosComingTags.jsx";
import TagsDropdown from "./TagsDropdown.jsx";

const CreateRSVP = () => {
    const theme = useTheme();
    const styles = CreateRsvpStyles(theme);
    const [input, setInput] = useState('')
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const isEmptyField = input === ''

    return (
        <Box className='createRsvpContainer' gap={0} sx={styles.createRsvpContainer}>
            <BackHeader linkTo='rsvp'/>
            <Box className='createRsvpFlexContainer' gap={0} sx={styles.createRsvpFlexContainer}>
                <VStack className='createRsvpFormContainer' gap={0} sx={styles.createRsvpFormContainer}>
                    <Text className='mainText' sx={styles.mainText}>Create RSVP</Text>
                    <Text className='subText' sx={styles.subText}>RSVP description</Text>
                    <FormControl isInvalid={isEmptyField} className='formControl' sx={styles.formControl}>
                        <FormLabel className='formLabel' sx={styles.formLabel}>Title</FormLabel>
                        <Input className='input' type='text' value={input} onChange={handleInputChange}
                               sx={styles.input}/>
                        {!isEmptyField ? (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Enter the email you would like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
                                blank</FormErrorMessage>
                        )}

                        <FormLabel className='formLabel' sx={styles.formLabel}>Description</FormLabel>
                        <Textarea className='input' value={input} onChange={handleInputChange} sx={styles.input}/>
                        {!isEmptyField ? (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Enter the email you would like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
                                blank</FormErrorMessage>
                        )}

                        <FormLabel className='formLabel' sx={styles.formLabel}>Location</FormLabel>
                        <Input className='input' type='text' value={input} onChange={handleInputChange}
                               sx={styles.input}/>
                        {!isEmptyField ? (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Enter the email you would like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
                                blank</FormErrorMessage>
                        )}

                        <FormLabel className='formLabel' sx={styles.formLabel}>Organizer</FormLabel>
                        <Input className='input' type='text' value={input} onChange={handleInputChange}
                               sx={styles.input}/>
                        {!isEmptyField ? (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Enter the email you would like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
                                blank</FormErrorMessage>
                        )}

                        <FormLabel className='formLabel' sx={styles.formLabel}>Date</FormLabel>
                        <Input className='input' type='date' value={input} onChange={handleInputChange}
                               sx={styles.input}/>
                        {!isEmptyField ? (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Enter the email you would like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
                                blank</FormErrorMessage>
                        )}

                        <FormLabel className='formLabel' sx={styles.formLabel}>Start Time</FormLabel>
                        <Input className='input' type='time' value={input} onChange={handleInputChange}
                               sx={styles.input}/>
                        {!isEmptyField ? (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Enter the email you would like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
                                blank</FormErrorMessage>
                        )}

                        <FormLabel className='formLabel' sx={styles.formLabel}>End Time</FormLabel>
                        <Input className='input' type='time' value={input} onChange={handleInputChange}
                               sx={styles.input}/>
                        {!isEmptyField ? (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Enter the email you would like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
                                blank</FormErrorMessage>
                        )}

                        <WhosComingTags/>

                        <FormLabel className='formLabel'>Icon Color</FormLabel>
                        <Select
                            className='input'
                            value={selectedOption}
                            onChange={handleOptionChange}
                        >
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                        </Select>
                        {!selectedOption ? (
                            <FormErrorMessage className='formErrorMessage'>Can not leave blank</FormErrorMessage>
                        ) : (
                            <FormHelperText className='formHelperText'>Selected: {selectedOption}</FormHelperText>
                        )}

                        <FormLabel className='formLabel'>Category</FormLabel>
                        <Select
                            className='input'
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            {/* Add more options as needed */}
                        </Select>
                        {!selectedCategory ? (
                            <FormErrorMessage className='formErrorMessage'>Can not leave blank</FormErrorMessage>
                        ) : (
                            <FormHelperText className='formHelperText'>Selected: {selectedCategory}</FormHelperText>
                        )}

                        <TagsDropdown/>

                        <FormLabel className='formLabel' sx={styles.formLabel}>Links</FormLabel>
                        <Input className='input' type='link' value={input} onChange={handleInputChange}
                               sx={styles.input}/>
                        {!isEmptyField ? (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Enter the email you would like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
                                blank</FormErrorMessage>
                        )}

                        <FormLabel className='formLabel' sx={styles.formLabel}>Notes</FormLabel>
                        <Textarea className='input' value={input} onChange={handleInputChange} sx={styles.input}/>
                        {!isEmptyField ? (
                            <FormHelperText className='formHelperText' sx={styles.formHelperText}>
                                Enter the email you would like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Can not leave
                                blank</FormErrorMessage>
                        )}

                    </FormControl>
                </VStack>

                <VStack className='createRsvpImageContainer' gap={0} sx={styles.createRsvpImageContainer}>
                    <Text>Cant Put down the cup</Text>
                </VStack>
            </Box>
        </Box>
    )
}

export default CreateRSVP;
