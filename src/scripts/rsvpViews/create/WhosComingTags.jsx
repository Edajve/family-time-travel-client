import React, {useState, useEffect} from 'react';
import {
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    Tag,
    TagCloseButton,
    TagLabel,
    useTheme
} from '@chakra-ui/react';
import CreateRsvpStyles from "../../../styles/CreateRsvpStyles.js";

const WhosComingTags = ({onTagsChange}) => {
    const [tags, setTags] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const theme = useTheme();
    const styles = CreateRsvpStyles(theme);

    useEffect(() => {
        // Call the callback function to send tags upstream whenever tags change
        onTagsChange(tags);
    }, [tags, onTagsChange]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
        setError(false); // Reset error when input changes
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            if (tags.includes(input.trim())) {
                setError(true); // Set error if tag already exists
            } else {
                setTags([...tags, input.trim()]);
                setInput('');
            }
        }
    };

    const handleTagRemove = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div>
            <FormLabel className='formLabel' sx={styles.formLabel}>Guests Who Are Attending</FormLabel>
            <Input
                className='input'
                type='text'
                size='sm'
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />
            {tags.map(tag => (
                <Tag key={tag} variant="solid" colorScheme="teal" className='tag'>
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton onClick={() => handleTagRemove(tag)}/>
                </Tag>
            ))}
            {!tags.length && !error && (
                <FormHelperText className='formHelperText' sx={styles.formHelperText}>Type and press Enter to add a
                    guest</FormHelperText>
            )}
            {error && (
                <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Guest already
                    added</FormErrorMessage>
            )}
        </div>
    );
};

export default WhosComingTags;
