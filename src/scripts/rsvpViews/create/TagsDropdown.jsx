import React, {useState} from 'react';
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

const WhosComingTags = () => {
    const [tags, setTags] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const theme = useTheme();
    const styles = CreateRsvpStyles(theme);

    const handleInputChange = (e) => {
        setInput(e.target.value);
        setError(false);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            if (tags.includes(input.trim())) {
                setError(true); // Tag already exists
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
            <FormLabel className='formLabel' sx={styles.formLabel}>Add Tags to categorize your event(s) for future
                searching</FormLabel>
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
                <FormHelperText className='formHelperText' sx={styles.formHelperText}>Optionally, add tags to categorize
                    your event for future searching.</FormHelperText>
            )}
            {error && (
                <FormErrorMessage className='formErrorMessage' sx={styles.formErrorMessage}>Guest already
                    added</FormErrorMessage>
            )}
        </div>
    );
};

export default WhosComingTags;
